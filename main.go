package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {

	http.HandleFunc("/signin", Signin)
	http.HandleFunc("/welcome", Welcome)

	// using react signin page
	http.Handle("/", http.FileServer(http.Dir("./views/signinpage")))

	// start the server on port 8000
	fmt.Println("listening on port 8000")
	log.Fatal(http.ListenAndServe(":8000", nil))
}
