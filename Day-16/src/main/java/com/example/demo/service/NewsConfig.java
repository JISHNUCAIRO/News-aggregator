package com.example.demo.service;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class NewsConfig {
@Bean
public RestTemplate restTemp() {
	return new RestTemplate();
	}
}
