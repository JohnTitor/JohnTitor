package main

import (
	"fmt"
	"io"
	"os"
)

func main() {
	src, err := os.Open("README.md")
	if err != nil {
		fmt.Printf("Failed to open file: %s\n", err.Error())
		return
	}

	dst, err := os.Create("copied.md")
	if err != nil {
		fmt.Printf("Failed to create file: %s\n", err.Error())
		return
	}
	_, err = io.Copy(dst, src)
	if err != nil {
		fmt.Printf("Failed to copy file: %s\n", err.Error())
		return
	}
}
