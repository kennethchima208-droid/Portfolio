const validation = new JustValidate('#form');

  validation
    .addField('#Name', [
      { rule: 'required', errorMessage: 'Name is required' },
      { rule: 'minLength', value: 3, errorMessage: 'Name must be at least 3 characters' },
    ])
    .addField('#email', [
      { rule: 'required', errorMessage: 'Email is required' },
      { rule: 'email', errorMessage: 'Enter a valid email address' },
      // {rule: 'email',},
      //  {
      //     validator: (value) => () => {
      //       return fetch("validate-email.php?email=" +
      //       encodeURIComponent(value))
      //           .then(function(response){
      //             return response.json();
      //          })
      //          .then(function(json) {
      //             return json.available;
      //         });
      //     },
      //     errorMessage: "email already taken"
      //   }
    ])
    .addField("#message", [
      {
          rule: 'required', errorMessage: 'message is required'
      },
    ])
    
    .onSuccess((event) => {
      document.getElementById('form').submit();
    });
