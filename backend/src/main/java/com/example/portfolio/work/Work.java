package com.example.portfolio.work;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name="works")
@Entity(name = "works")

@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")

public class Work {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String image;

    public Work(WorkRequestDTO data) {
        this.title = data.title();
        this.image = data.image();
    }
}
