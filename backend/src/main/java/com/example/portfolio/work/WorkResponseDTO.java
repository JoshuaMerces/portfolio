package com.example.portfolio.work;

public record WorkResponseDTO(Long id, String tittle, String image) {

    public WorkResponseDTO(Work work) {
        this(work.getId(),  work.getTitle(), work.getImage());
    }

}
