package server

import (
	"net/http"
	"os"
	"strings"

	"github.com/Prodway-AI/heidi/api/internal/handlers"
)

func New(version string) http.Handler {
	mux := http.NewServeMux()
	mux.HandleFunc("GET /health", handlers.Health())
	mux.HandleFunc("GET /version", handlers.Version(version))
	return withCORS(mux)
}

func withCORS(next http.Handler) http.Handler {
	allowed := map[string]bool{
		"https://heidiherzog.com":     true,
		"https://www.heidiherzog.com": true,
		"http://localhost:3000":      true,
		"http://127.0.0.1:3000":      true,
	}
	if extra := os.Getenv("CORS_ORIGINS"); extra != "" {
		for _, origin := range strings.Split(extra, ",") {
			allowed[strings.TrimSpace(origin)] = true
		}
	}

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		origin := r.Header.Get("Origin")
		if allowed[origin] {
			w.Header().Set("Access-Control-Allow-Origin", origin)
			w.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
			w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		}
		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
			return
		}
		next.ServeHTTP(w, r)
	})
}
