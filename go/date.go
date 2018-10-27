package main
 
import "time"
import "fmt"
 
func main() {
    t := time.Now()
    fmt.Println(t)  
    fmt.Println("Current Year: " + t.Year());
    fmt.Println("Current Month: " + t.Month());
    fmt.Println("Current Day: " + d.Day());
}
