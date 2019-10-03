#include <chrono>
#include <iomanip>
#include <iostream>

int main() {
  using clk = std::chrono::system_clock;
  auto now = clk::to_time_t(clk::now());

  std::cout << "Date and time: "
            << std::put_time(std::localtime(&now), "%Y-%m-%d %H:%M:%S")
            << std::endl;

  return 0;
}
