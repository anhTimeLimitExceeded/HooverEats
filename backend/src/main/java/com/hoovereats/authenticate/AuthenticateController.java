package com.hoovereats.authenticate;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
public class AuthenticateController {
	
  @PostMapping("/auth")
	public String index(@RequestHeader Map<String, String> headers) throws FirebaseAuthException {
  	System.out.println(headers);
  	System.out.println(headers.get("authorization"));
    FirebaseToken decodedToken = FirebaseAuth.getInstance().verifyIdToken(headers.get("authorization"));
    String uid = decodedToken.getUid();
    System.out.println(uid);
    return null;
	}

}
