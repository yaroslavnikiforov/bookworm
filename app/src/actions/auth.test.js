const auth = require("./auth")
// @ponicode
describe("auth.userLoggedIn", () => {
    test("0", () => {
        let callFunction = () => {
            auth.userLoggedIn("user1+user2@mycompany.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            auth.userLoggedIn("something@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            auth.userLoggedIn("user@host:300")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            auth.userLoggedIn("bed-free@tutanota.de")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            auth.userLoggedIn("ponicode.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            auth.userLoggedIn(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("auth.confirm", () => {
    test("0", () => {
        let callFunction = () => {
            auth.confirm("elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            auth.confirm("Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            auth.confirm("Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            auth.confirm(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("auth.resetPasswordRequest", () => {
    test("0", () => {
        let callFunction = () => {
            auth.resetPasswordRequest({ email: "email@Google.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            auth.resetPasswordRequest({ email: "user1+user2@mycompany.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            auth.resetPasswordRequest({ email: "ponicode.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            auth.resetPasswordRequest({ email: "TestUpperCase@Example.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            auth.resetPasswordRequest({ email: "user@host:300" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            auth.resetPasswordRequest({ email: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("auth.validateToken", () => {
    test("0", () => {
        let callFunction = () => {
            auth.validateToken("Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            auth.validateToken("elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            auth.validateToken("Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            auth.validateToken(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("auth.resetPassword", () => {
    test("0", () => {
        let callFunction = () => {
            auth.resetPassword("a85a8e6b-348b-4011-a1ec-1e78e9620782")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            auth.resetPassword("03ea49f8-1d96-4cd0-b279-0684e3eec3a9")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            auth.resetPassword("7289708e-b17a-477c-8a77-9ab575c4b4d8")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            auth.resetPassword(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
