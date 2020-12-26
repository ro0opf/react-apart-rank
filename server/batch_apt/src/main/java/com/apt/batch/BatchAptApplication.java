package com.apt.batch;

import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@EnableBatchProcessing
@SpringBootApplication
public class BatchAptApplication {

	public static void main(String[] args) {
		SpringApplication.run(BatchAptApplication.class, args);
	}

}
