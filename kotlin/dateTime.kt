import java.time.LocalDateTime
fun main(args: Array<String>) {
	println(LocalDateTime.now().toString().replace("T", " "))
}
