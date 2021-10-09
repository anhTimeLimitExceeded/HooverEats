package com.hoovereats;

// import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
public class AuthenticateController {
  FirebaseOptions options = FirebaseOptions.builder()
    .setCredentials(GoogleCredentials.getApplicationDefault())
    .build();
  FirebaseApp.initializeApp(options);
	
  @PostMapping("/auth")
	public String index(@RequestHeader Map<String, String> headers) {
		System.out.println(headers);
    FirebaseToken decodedToken = FirebaseAuth.getInstance().verifyIdToken(idToken);
    String uid = decodedToken.getUid();  

    System.out.println(uid);
    return null;
	}

}
