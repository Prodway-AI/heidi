package main

import (
	"log"
	"net/http"
	"os"

	"github.com/Prodway-AI/heidi/api/internal/server"
)

func main() {
	addr := ":8080"
	if port := os.Getenv("PORT"); port != "" {
		addr = ":" + port
	}

	version := os.Getenv("API_VERSION")
	log.Printf("heidi-api listening on %s", addr)
	if err := http.ListenAndServe(addr, server.New(version)); err != nil {
		log.Fatal(err)
	}
}
