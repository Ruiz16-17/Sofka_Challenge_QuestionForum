package co.com.sofka.questions.model;


import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

public class FavoriteQuestionDTO {

    private String id;
    @NotBlank
    private String userId;
    @NotBlank
    private String questionId;

    public FavoriteQuestionDTO() {

    }

    public FavoriteQuestionDTO(String userId, String questionId) {
        this.userId = userId;
        this.questionId = questionId;
    }

    public FavoriteQuestionDTO(String id, String userId, String questionId) {
        this.id = id;
        this.userId = userId;
        this.questionId = questionId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getQuestionId() {
        return questionId;
    }

    public void setQuestionId(String questionId) {
        this.questionId = questionId;
    }
}
