package hans.mari.diary_server.Domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class Diary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String propertytitle;

    @Column(nullable = false)
    private String propertycontent;

    @Column(nullable = false)
    private String today;

    @Column(nullable = false)
    private String usercode;

}
