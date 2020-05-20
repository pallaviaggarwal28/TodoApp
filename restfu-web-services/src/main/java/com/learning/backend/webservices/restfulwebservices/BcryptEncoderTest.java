package com.learning.backend.webservices.restfulwebservices;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptEncoderTest {

  public static void main(String[] args) {
    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
//    String encodedPassword = encoder.encode("Password@123");
    String encodedPassword = encoder.encode("Password@123");
    boolean flag = encoder.matches("dummy", "$2a$10$3zHzb.Npv1hfZbLEU5qsdOju/tk2je6W6PnNnY.c1ujWPcZh4PL6e");
    System.out.println(encodedPassword);
  }
}
