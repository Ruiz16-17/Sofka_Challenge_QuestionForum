package co.com.sofka.questions.Service;

import co.com.sofka.questions.model.AnswerDTO;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.usecases.GetUseCase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import reactor.core.publisher.Mono;

@Service
@Validated
public class SendMailService {

    @Autowired
    private JavaMailSender javaMailSender;

    private final String FROM = "sofkachallenge.questionsystem@gmail.com";

    public SendMailService() {
    }

    public Mono<String> sendMail(String to, String subject, String body){

        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();

        simpleMailMessage.setFrom(FROM);
        simpleMailMessage.setTo(to);
        simpleMailMessage.setSubject(subject);
        simpleMailMessage.setText(body);

        javaMailSender.send(simpleMailMessage);

        return Mono.just("¡Send!");
    }
}
