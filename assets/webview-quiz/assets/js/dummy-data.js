let practisePlayerRule = {
  "event": {
    "onOptClick": {
      "actions": [
        {
          "value": "styleAttempt",
          "type": "applyClass",
          "data": ""
        }
      ]
    },
    "resetQuestion": {
      "actions": [
        {
          "value": "styleAttempt",
          "type": "removeClass",
          "data": "instantFeedback"
        },
        {
          "value": "styleAttempt",
          "type": "removeClass",
          "data": "disable"
        },
        {
          "value": "styleAttempt",
          "type": "removeClass",
          "data": "showQSol"
        },
        {
          "value": "styleAttempt",
          "type": "removeClass",
          "data": "showQSol_C"
        },
        {
          "value": "styleAttempt",
          "type": "removeClass",
          "data": "showQSol_W"
        },
        {
          "value": "styleAttempt",
          "type": "removeClass",
          "data": "showQFb_W"
        },
        {
          "value": "styleAttempt",
          "type": "removeClass",
          "data": "showSolButton"
        }
      ]
    },
    "USER_ATTEMPT_UPDATED": {
      "actions": [
        {
          "value": "styleAttempt",
          "type": "applyClass",
          "data": "instantFeedback"
        },
        {
          "value": "styleAttempt",
          "type": "applyClass",
          "data": "showQSol_C"
        }
      ]
    },
    "loadQuestion": {
      "actions": [
        {
          "value": "styleAttempt",
          "type": "removeClass",
          "data": "instantFeedback"
        },
        {
          "value": "styleAttempt",
          "type": "removeClass",
          "data": "disable"
        },
        {
          "value": "styleAttempt",
          "type": "removeClass",
          "data": "showQSol"
        },
        {
          "value": "styleAttempt",
          "type": "removeClass",
          "data": "showQSol_C"
        },
        {
          "value": "styleAttempt",
          "type": "removeClass",
          "data": "showQSol_W"
        },
        {
          "value": "styleAttempt",
          "type": "removeClass",
          "data": "showQFb_W"
        },
        {
          "value": "styleAttempt",
          "type": "removeClass",
          "data": "showSolButton"
        }
      ]
    },
    "attemptFb": {
      "actions": [
        {
          "value": "styleAttempt",
          "type": "applyClass",
          "data": "instantFeedback"
        },
        {
          "value": "styleAttempt",
          "type": "applyClass",
          "data": "showQFb_W"
        }
      ]
    },
    "qValidation": {
      "actions": [
        {
          "value": "styleAttempt",
          "type": "applyClass",
          "data": "disable"
        }
      ]
    },
    "maxAttemptFb": {
      "actions": [
        {
          "value": "styleAttempt",
          "type": "applyClass",
          "data": "instantFeedback"
        },
        {
          "value": "styleAttempt",
          "type": "applyClass",
          "data": "showQSol_W"
        },
        {
          "value": "styleAttempt",
          "type": "applyClass",
          "data": "showSolButton"
        },
        {
          "value": "styleAttempt",
          "type": "applyClass",
          "data": "missed"
        }
      ]
    },
    "correctAttemptFb": {
      "actions": [
        {
          "value": "styleAttempt",
          "type": "applyClass",
          "data": "instantFeedback"
        },
        {
          "value": "styleAttempt",
          "type": "applyClass",
          "data": "showQSol"
        },
        {
          "value": "styleAttempt",
          "type": "applyClass",
          "data": "showQSol_C"
        }
      ]
    }
  },
  "parameters": {
    "maxAttempt": 2,
    "allOption": 1,
    "qCompletion": "Q_Fb"
  },
  "msgRule" : [
    {"rule" : "1_1_0" , "value":["c_1"], "label":"correct" },
    {"rule" : "1_1_1" , "value":["c_1"], "label":"correct" },
    {"rule" : "1_1_2" , "value":["c_1"], "label":"correct" },
    {"rule" : "1_0_0" , "value":["m_1"], "label":"missed" },    
    {"rule" : "1_0_1" , "value":["m_1"], "label":"missed" },
    {"rule" : "1_0_2" , "value":["m_1"], "label":"missed" },
    {"rule" : "0_1_0" , "value":["w_1"], "label":"incorrect" },    
    {"rule" : "0_1_1" , "value":["w_1"], "label":"incorrect" },
    {"rule" : "0_1_2" , "value":["w_1"], "label":"incorrect" },
    {"rule" : "Q_0_0" , "value":["q_w_retry1"], "label":"incorrect last attempt" },
    {"rule" : "Q_1_0" , "value":["q_w1"], "label":"incorrect last attempt" },
    {"rule" : "Q_2_0" , "value":["q_c1"], "label":"correct last attempt" },
    {"rule" : "Q_0_1" , "value":["q_w1"], "label":"incorrect last attempt" },
    {"rule" : "Q_1_1" , "value":["q_w1"], "label":"partial; first attempt" },
    {"rule" : "Q_2_1" , "value":["q_c2"], "label":"correct last attempt" }
    ]
}

let revisePlayerRule = {
  "event": {
    "onOptClick": {
      "actions": [
        {
          "value": "styleAttempt",
          "type": "applyClass",
          "data": "instantFeedback"
        }
      ]
    },
    "USER_ATTEMPT_UPDATED": {
      "actions": [
        {
          "value": "styleAttempt",
          "type": "applyClass",
          "data": "instantFeedback"
        }
      ]
    },
    "resetQuestion": {
      "actions": [
        {
          "value": "styleAttempt",
          "type": "removeClass",
          "data": "instantFeedback"
        }
      ]
    },
    "maxAttemptFb": {
      "actions": [
        {
          "value": "styleAttempt",
          "type": "applyClass",
          "data": "instantFeedback"
        },
        {
          "value": "styleAttempt",
          "type": "applyClass",
          "data": "showQSol_W"
        }
      ]
    },
    "correctAttemptFb": {
      "actions": [
        {
          "value": "styleAttempt",
          "type": "applyClass",
          "data": "instantFeedback"
        },
        {
          "value": "styleAttempt",
          "type": "applyClass",
          "data": "showQSol"
        },
        {
          "value": "styleAttempt",
          "type": "applyClass",
          "data": "showQSol_C"
        }
      ]
    }
  },
  "parameters": {
    "maxAttempt": 0,
    "allOption": 0,
    "qCompletion": "Q_Fb"
  }
}

let testPlayerRule = {
  "event": {
    "qInit_preview": {
      "actions": [
        {
          "value": "stylePreview",
          "type": "applyClass",
          "data": "instantFeedback"
        }
      ]
    },
    "mode_preview_": {
      "actions": [
        {
          "value": "stylePreview",
          "type": "applyClass",
          "data": "instantFeedback"
        },
        {
          "value": "stylePreview",
          "type": "applyClass",
          "data": "showQSol_W"
        }
      ]
    },
    "mode_preview_0": {
      "actions": [
        {
          "value": "stylePreview",
          "type": "applyClass",
          "data": "instantFeedback"
        },
        {
          "value": "stylePreview",
          "type": "applyClass",
          "data": "showQSol_W"
        }
      ]
    },
    "mode_preview_1": {
      "actions": [
        {
          "value": "stylePreview",
          "type": "applyClass",
          "data": "instantFeedback"
        },
        {
          "value": "stylePreview",
          "type": "applyClass",
          "data": "showQSol_W"
        }
      ]
    },
    "mode_preview_2": {
      "actions": [
        {
          "value": "stylePreview",
          "type": "applyClass",
          "data": "instantFeedback"
        },
        {
          "value": "stylePreview",
          "type": "applyClass",
          "data": "showQSol"
        },
        {
          "value": "stylePreview",
          "type": "applyClass",
          "data": "showQSol_C"
        }
      ]
    }
  },
  "parameters": {
    "maxAttempt": 0
  }
}


let bigIdeaPlayerRule = {
  "event": {
    "onOptClick": {
      "actions": [
        {
          "value": "styleAttempt",
          "type": "applyClass",
          "data": "instantFeedback"
        },
        {
          "value": "styleAttempt",
          "type": "applyClass",
          "data": "optHide"
        }
      ]
    },
    "qInit": {
      "actions": [
        {
          "value": "styleAttempt",
          "type": "removeClass",
          "data": "showthemeAnimation"
        }
      ]
    },
    "nextQuest": {
      "actions": [
        {
          "value": "styleAttempt",
          "type": "applyClass",
          "data": "right-to-left"
        }
      ]
    },
    "resetQuestion": {
      "actions": [
        {
          "value": "styleAttempt",
          "type": "removeClass",
          "data": "showthemeAnimation"
        },
        {
          "value": "styleAttempt",
          "type": "removeClass",
          "data": "disable"
        },
        {
          "value": "styleAttempt",
          "type": "removeClass",
          "data": "showQSol"
        },
        {
          "value": "styleAttempt",
          "type": "removeClass",
          "data": "showQSol_C"
        },
        {
          "value": "styleAttempt",
          "type": "removeClass",
          "data": "showQSol_W"
        },
        {
          "value": "styleAttempt",
          "type": "removeClass",
          "data": "showQFb_W"
        }
      ]
    },
    "USER_ATTEMPT_UPDATED": {
      "actions": [
        {
          "value": "styleAttempt",
          "type": "applyClass",
          "data": "instantFeedback"
        },
        {
          "value": "styleAttempt",
          "type": "applyClass",
          "data": "showQSol_C"
        }
      ]
    },
    "loadQuestion": {
      "actions": [
        {
          "value": "styleAttempt",
          "type": "removeClass",
          "data": "instantFeedback"
        },
        {
          "value": "styleAttempt",
          "type": "removeClass",
          "data": "disable"
        },
        {
          "value": "styleAttempt",
          "type": "removeClass",
          "data": "showQSol"
        },
        {
          "value": "styleAttempt",
          "type": "removeClass",
          "data": "showQSol_C"
        },
        {
          "value": "styleAttempt",
          "type": "removeClass",
          "data": "showQSol_W"
        },
        {
          "value": "styleAttempt",
          "type": "removeClass",
          "data": "showQFb_W"
        }
      ]
    },
    "attemptFb": {
      "actions": [
        {
          "value": "styleAttempt",
          "type": "applyClass",
          "data": "instantFeedback"
        },
        {
          "value": "styleAttempt",
          "type": "applyClass",
          "data": "showQFb_W"
        }
      ]
    },
    "qValidation": {
      "actions": [
        {
          "value": "styleAttempt",
          "type": "applyClass",
          "data": "disable"
        }
      ]
    },
    "maxAttemptFb": {
      "actions": [
        {
          "value": "styleAttempt",
          "type": "applyClass",
          "data": "instantFeedback"
        },
        {
          "value": "styleAttempt",
          "type": "applyClass",
          "data": "showQSol_W"
        }
      ]
    },
    "correctAttemptFb": {
      "actions": [
        {
          "value": "styleAttempt",
          "type": "applyClass",
          "data": "instantFeedback"
        },
        {
          "value": "styleAttempt",
          "type": "applyClass",
          "data": "showQSol"
        },
        {
          "value": "styleAttempt",
          "type": "applyClass",
          "data": "showQSol_C"
        }
      ]
    }
  },
  "parameters": {
    "maxAttempt": 2,
    "allOption": 1,
    "qCompletion": "Q_Fb"
  }
}

let player_class = "practice_player"  //practice_player | test_player | revise_player
let  mode = "attempt";
let  subResourceData = {
  "data": [
    {
      "instructions": "<p>Select the correct answer.</p>",
      "metadata": {
        "template_reference": "",
        "name": ""
      },
      "questionID": "tqqb-d3cb3e62-f5b3-42d3-b63e-5daa78e2e836",
      "data": {
        "stimulus_media": null,
        "metadata": {
          "duration": 60,
          "difficulty": "Easy",
          "distractor_rationale": {
            "label": "Incorrect feedback",
            "audio": ""
          },
          "bloom": "Comprehension",
          "acknowledgements": {
            "label": "Correct feedback",
            "audio": ""
          },
          "construct": "costr-cd6ff429-dd26-4fdc-9a11-5b0cb0327126",
          "shuffle": true,
          "version": 1,
          "microConcept": [
            {
              "id": "micro-55775dd3-9b95-426c-bf18-4dc13936700a",
              "label": "Commutative, Associative and Distributive property"
            }
          ]
        },
        "stimulus": "<p>Which of the following operations is/are <strong>not</strong> commutative for rational numbers?</p><p>I. Addition</p><p>II. Subtraction</p><p>III. Multiplication</p><p>IV. Division</p>",
        "options": [
          {
            "feedback": [
              {
                "text": "<p>Is division commutative for rational numbers?</p><p>Is <img src=\"data:image/svg{{{plus}}}xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Awrs%3D%22http%3A%2F%2Fwww.wiris.com%2Fxml%2Fcvs-extension%22%20height%3D%2221%22%20width%3D%2237%22%20wrs%3Abaseline%3D%2216%22%3E%3C!--MathML%3A%20%3Cmath%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1998%2FMath%2FMathML%22%3E%3Cmi%3Ea%3C%2Fmi%3E%3Cmo%3E%26%23xF7%3B%3C%2Fmo%3E%3Cmi%3Eb%3C%2Fmi%3E%3C%2Fmath%3E--%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%40font-face%7Bfont-family%3A'ae2ef524fbf3d9fe611d5a8e90fefdc'%3Bsrc%3Aurl(data%3Afont%2Ftruetype%3Bcharset%3Dutf-8%3Bbase64%2CAAEAAAAMAIAAAwBAT1MvMjv%2FLJYAAADMAAAATmNtYXDgWxEdAAABHAAAADRjdnQgAAAABwAAAVAAAAAEZ2x5ZoYrxVAAAAFUAAAA0WhlYWQOdyayAAACKAAAADZoaGVhC0UVwQAAAmAAAAAkaG10eCg8AIUAAAKEAAAACGxvY2EAAAVKAAACjAAAAAxtYXhwBIoEWwAAApgAAAAgbmFtZXSF9ZsAAAK4AAABrXBvc3QDogHPAAAEaAAAACBwcmVwukanGAAABIgAAAANAAAGtAGQAAUAAAgACAAAAAAACAAIAAAAAAAAAQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAAAAAg8AMGe%2F57AAAHPgGyAAAAAAACAAEAAQAAABQAAwABAAAAFAAEACAAAAAEAAQAAQAAAGH%2F%2FwAAAGH%2F%2F%2F%2BgAAEAAAAAAAAABwACAFUAAAMAA6sAAwAHAAAzESERJSERIVUCq%2F2rAgD%2BAAOr%2FFVVAwAAAwAt%2F3QEAwRZAAsAFwAdADsYAbAdELAD1LADELAU1LAUELAc1LAcELAJ1LAcELAOPLAJELAbPACwBhCwEdSwBhCwANSwABCwF9QwMQEiABEWEjMyEjcQJgYWAwIGIyImNTQ2MwE1BhMjEgIBs%2F7fFvWy07oDhYZwFgxOhVmysoUB7YwEslEEWf7f%2Ft71%2Ft8BM%2BMBp5yyLf6d%2FwBlyJzfsvxZjF0B5%2F1eAAAAAAEAAAABAACav9usXw889QADCAD%2F%2F%2F%2F%2F1a3uPf%2F%2F%2F%2F%2FVre49AAH%2B9QQDBkMAAAAKAAIAAQAAAAAAAQAABz7%2BTgAAF3AAAf%2F8BAMAAQAAAAAAAAAAAAAAAAAAAAIDUgBVBEwALQAAAAAAAAAoAAAA0QABAAAAAgAeAAMAAAAAAAIAgAQAAAAAAAQAADsAAAAAAAAAFQECAAAAAAAAAAEAFgAAAAAAAAAAAAIADgAWAAAAAAAAAAMANAAkAAAAAAAAAAQAFgBYAAAAAAAAAAUAFgBuAAAAAAAAAAYACwCEAAAAAAAAAAgAHACPAAEAAAAAAAEAFgAAAAEAAAAAAAIADgAWAAEAAAAAAAMANAAkAAEAAAAAAAQAFgBYAAEAAAAAAAUAFgBuAAEAAAAAAAYACwCEAAEAAAAAAAgAHACPAAMAAQQJAAEAFgAAAAMAAQQJAAIADgAWAAMAAQQJAAMANAAkAAMAAQQJAAQAFgBYAAMAAQQJAAUAFgBuAAMAAQQJAAYACwCEAAMAAQQJAAgAHACPAE0AYQB0AGgAIABGAG8AbgB0ACAAMgBSAGUAZwB1AGwAYQByAE0AYQB0AGgAcwAgAEYAbwByACAATQBvAHIAZQAgAE0AYQB0AGgAIABGAG8AbgB0ACAAMgBNAGEAdABoACAARgBvAG4AdAAgADIAVgBlAHIAcwBpAG8AbgAgADEALgAwTWF0aF9Gb250XzIATQBhAHQAaABzACAARgBvAHIAIABNAG8AcgBlAAAAAAMAAAAAAAADnwHPAAAAAAAAAAAAAAAAAAAAAAAAAAC5ByIAAI2FGACyAAAAAAAA)format('truetype')%3Bfont-weight%3Anormal%3Bfont-style%3Anormal%3B%7D%40font-face%7Bfont-family%3A'math13cec07e9ba5f5bb252d13f5f43'%3Bsrc%3Aurl(data%3Afont%2Ftruetype%3Bcharset%3Dutf-8%3Bbase64%2CAAEAAAAMAIAAAwBAT1MvMi7iBBMAAADMAAAATmNtYXDEvmKUAAABHAAAADRjdnQgDVUNBwAAAVAAAAA6Z2x5ZoPi2VsAAAGMAAAAm2hlYWQQC2qxAAACKAAAADZoaGVhCGsXSAAAAmAAAAAkaG10eE2rRkcAAAKEAAAACGxvY2EAHTwYAAACjAAAAAxtYXhwBT0FPgAAApgAAAAgbmFtZaBxlY4AAAK4AAABn3Bvc3QB9wD6AAAEWAAAACBwcmVwa1uragAABHgAAAAUAAADSwGQAAUAAAQABAAAAAAABAAEAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAAAAAg1UADev96AAAD6ACWAAAAAAACAAEAAQAAABQAAwABAAAAFAAEACAAAAAEAAQAAQAAAPf%2F%2FwAAAPf%2F%2F%2F8KAAEAAAAAAAABVAMsAIABAABWACoCWAIeAQ4BLAIsAFoBgAKAAKAA1ACAAAAAAAAAACsAVQCAAKsA1QEAASsABwAAAAIAVQAAAwADqwADAAcAADMRIRElIREhVQKr%2FasCAP4AA6v8VVUDAAADAIAAgAMAAoAAAwAHAAsAQRgBsAQQsQAD9LEEB%2FSwCDyxBRH0sAo8sQEH9LEMA%2BYAsQMMENWxAAX1sAMQsQgF9bELEfWwABCxBwX1sQQR9TAxEyEVIQEzFSMRMxUjgAKA%2FYABAICAgIABq1YBK4D%2FAIAAAAEAAAABAADVeM5BXw889QADBAD%2F%2F%2F%2F%2F1joTc%2F%2F%2F%2F%2F%2FWOhNzAAD%2FIASAA6sAAAAKAAIAAQAAAAAAAQAAA%2Bj%2FagAAF3AAAP%2B2BIAAAQAAAAAAAAAAAAAAAAAAAAIDUgBVA4AAgAAAAAAAAAAoAAAAmwABAAAAAgBeAAUAAAAAAAIAgAQAAAAAAAQAAN4AAAAAAAAAFQECAAAAAAAAAAEAEgAAAAAAAAAAAAIADgASAAAAAAAAAAMAMAAgAAAAAAAAAAQAEgBQAAAAAAAAAAUAFgBiAAAAAAAAAAYACQB4AAAAAAAAAAgAHACBAAEAAAAAAAEAEgAAAAEAAAAAAAIADgASAAEAAAAAAAMAMAAgAAEAAAAAAAQAEgBQAAEAAAAAAAUAFgBiAAEAAAAAAAYACQB4AAEAAAAAAAgAHACBAAMAAQQJAAEAEgAAAAMAAQQJAAIADgASAAMAAQQJAAMAMAAgAAMAAQQJAAQAEgBQAAMAAQQJAAUAFgBiAAMAAQQJAAYACQB4AAMAAQQJAAgAHACBAE0AYQB0AGgAIABGAG8AbgB0AFIAZQBnAHUAbABhAHIATQBhAHQAaABzACAARgBvAHIAIABNAG8AcgBlACAATQBhAHQAaAAgAEYAbwBuAHQATQBhAHQAaAAgAEYAbwBuAHQAVgBlAHIAcwBpAG8AbgAgADEALgAwTWF0aF9Gb250AE0AYQB0AGgAcwAgAEYAbwByACAATQBvAHIAZQAAAwAAAAAAAAH0APoAAAAAAAAAAAAAAAAAAAAAAAAAALkHEQAAjYUYALIAAAAVFBOxAAE%2F)format('truetype')%3Bfont-weight%3Anormal%3Bfont-style%3Anormal%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctext%20font-family%3D%22ae2ef524fbf3d9fe611d5a8e90fefdc%22%20font-size%3D%2216%22%20font-style%3D%22italic%22%20text-anchor%3D%22middle%22%20x%3D%224.5%22%20y%3D%2216%22%3Ea%3C%2Ftext%3E%3Ctext%20font-family%3D%22math13cec07e9ba5f5bb252d13f5f43%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20x%3D%2218.5%22%20y%3D%2216%22%3E%26%23xF7%3B%3C%2Ftext%3E%3Ctext%20font-family%3D%22Arial%22%20font-size%3D%2216%22%20font-style%3D%22italic%22%20text-anchor%3D%22middle%22%20x%3D%2230.5%22%20y%3D%2216%22%3Eb%3C%2Ftext%3E%3C%2Fsvg%3E\" alt=\"a divided by b\" height=\"21\" width=\"37\"> always equal to <img src=\"data:image/svg{{{plus}}}xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Awrs%3D%22http%3A%2F%2Fwww.wiris.com%2Fxml%2Fcvs-extension%22%20height%3D%2221%22%20width%3D%2237%22%20wrs%3Abaseline%3D%2216%22%3E%3C!--MathML%3A%20%3Cmath%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1998%2FMath%2FMathML%22%3E%3Cmi%3Eb%3C%2Fmi%3E%3Cmo%3E%26%23xF7%3B%3C%2Fmo%3E%3Cmi%3Ea%3C%2Fmi%3E%3C%2Fmath%3E--%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%40font-face%7Bfont-family%3A'ae2ef524fbf3d9fe611d5a8e90fefdc'%3Bsrc%3Aurl(data%3Afont%2Ftruetype%3Bcharset%3Dutf-8%3Bbase64%2CAAEAAAAMAIAAAwBAT1MvMjv%2FLJYAAADMAAAATmNtYXDgWxEdAAABHAAAADRjdnQgAAAABwAAAVAAAAAEZ2x5ZoYrxVAAAAFUAAAA0WhlYWQOdyayAAACKAAAADZoaGVhC0UVwQAAAmAAAAAkaG10eCg8AIUAAAKEAAAACGxvY2EAAAVKAAACjAAAAAxtYXhwBIoEWwAAApgAAAAgbmFtZXSF9ZsAAAK4AAABrXBvc3QDogHPAAAEaAAAACBwcmVwukanGAAABIgAAAANAAAGtAGQAAUAAAgACAAAAAAACAAIAAAAAAAAAQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAAAAAg8AMGe%2F57AAAHPgGyAAAAAAACAAEAAQAAABQAAwABAAAAFAAEACAAAAAEAAQAAQAAAGH%2F%2FwAAAGH%2F%2F%2F%2BgAAEAAAAAAAAABwACAFUAAAMAA6sAAwAHAAAzESERJSERIVUCq%2F2rAgD%2BAAOr%2FFVVAwAAAwAt%2F3QEAwRZAAsAFwAdADsYAbAdELAD1LADELAU1LAUELAc1LAcELAJ1LAcELAOPLAJELAbPACwBhCwEdSwBhCwANSwABCwF9QwMQEiABEWEjMyEjcQJgYWAwIGIyImNTQ2MwE1BhMjEgIBs%2F7fFvWy07oDhYZwFgxOhVmysoUB7YwEslEEWf7f%2Ft71%2Ft8BM%2BMBp5yyLf6d%2FwBlyJzfsvxZjF0B5%2F1eAAAAAAEAAAABAACav9usXw889QADCAD%2F%2F%2F%2F%2F1a3uPf%2F%2F%2F%2F%2FVre49AAH%2B9QQDBkMAAAAKAAIAAQAAAAAAAQAABz7%2BTgAAF3AAAf%2F8BAMAAQAAAAAAAAAAAAAAAAAAAAIDUgBVBEwALQAAAAAAAAAoAAAA0QABAAAAAgAeAAMAAAAAAAIAgAQAAAAAAAQAADsAAAAAAAAAFQECAAAAAAAAAAEAFgAAAAAAAAAAAAIADgAWAAAAAAAAAAMANAAkAAAAAAAAAAQAFgBYAAAAAAAAAAUAFgBuAAAAAAAAAAYACwCEAAAAAAAAAAgAHACPAAEAAAAAAAEAFgAAAAEAAAAAAAIADgAWAAEAAAAAAAMANAAkAAEAAAAAAAQAFgBYAAEAAAAAAAUAFgBuAAEAAAAAAAYACwCEAAEAAAAAAAgAHACPAAMAAQQJAAEAFgAAAAMAAQQJAAIADgAWAAMAAQQJAAMANAAkAAMAAQQJAAQAFgBYAAMAAQQJAAUAFgBuAAMAAQQJAAYACwCEAAMAAQQJAAgAHACPAE0AYQB0AGgAIABGAG8AbgB0ACAAMgBSAGUAZwB1AGwAYQByAE0AYQB0AGgAcwAgAEYAbwByACAATQBvAHIAZQAgAE0AYQB0AGgAIABGAG8AbgB0ACAAMgBNAGEAdABoACAARgBvAG4AdAAgADIAVgBlAHIAcwBpAG8AbgAgADEALgAwTWF0aF9Gb250XzIATQBhAHQAaABzACAARgBvAHIAIABNAG8AcgBlAAAAAAMAAAAAAAADnwHPAAAAAAAAAAAAAAAAAAAAAAAAAAC5ByIAAI2FGACyAAAAAAAA)format('truetype')%3Bfont-weight%3Anormal%3Bfont-style%3Anormal%3B%7D%40font-face%7Bfont-family%3A'math13cec07e9ba5f5bb252d13f5f43'%3Bsrc%3Aurl(data%3Afont%2Ftruetype%3Bcharset%3Dutf-8%3Bbase64%2CAAEAAAAMAIAAAwBAT1MvMi7iBBMAAADMAAAATmNtYXDEvmKUAAABHAAAADRjdnQgDVUNBwAAAVAAAAA6Z2x5ZoPi2VsAAAGMAAAAm2hlYWQQC2qxAAACKAAAADZoaGVhCGsXSAAAAmAAAAAkaG10eE2rRkcAAAKEAAAACGxvY2EAHTwYAAACjAAAAAxtYXhwBT0FPgAAApgAAAAgbmFtZaBxlY4AAAK4AAABn3Bvc3QB9wD6AAAEWAAAACBwcmVwa1uragAABHgAAAAUAAADSwGQAAUAAAQABAAAAAAABAAEAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAAAAAg1UADev96AAAD6ACWAAAAAAACAAEAAQAAABQAAwABAAAAFAAEACAAAAAEAAQAAQAAAPf%2F%2FwAAAPf%2F%2F%2F8KAAEAAAAAAAABVAMsAIABAABWACoCWAIeAQ4BLAIsAFoBgAKAAKAA1ACAAAAAAAAAACsAVQCAAKsA1QEAASsABwAAAAIAVQAAAwADqwADAAcAADMRIRElIREhVQKr%2FasCAP4AA6v8VVUDAAADAIAAgAMAAoAAAwAHAAsAQRgBsAQQsQAD9LEEB%2FSwCDyxBRH0sAo8sQEH9LEMA%2BYAsQMMENWxAAX1sAMQsQgF9bELEfWwABCxBwX1sQQR9TAxEyEVIQEzFSMRMxUjgAKA%2FYABAICAgIABq1YBK4D%2FAIAAAAEAAAABAADVeM5BXw889QADBAD%2F%2F%2F%2F%2F1joTc%2F%2F%2F%2F%2F%2FWOhNzAAD%2FIASAA6sAAAAKAAIAAQAAAAAAAQAAA%2Bj%2FagAAF3AAAP%2B2BIAAAQAAAAAAAAAAAAAAAAAAAAIDUgBVA4AAgAAAAAAAAAAoAAAAmwABAAAAAgBeAAUAAAAAAAIAgAQAAAAAAAQAAN4AAAAAAAAAFQECAAAAAAAAAAEAEgAAAAAAAAAAAAIADgASAAAAAAAAAAMAMAAgAAAAAAAAAAQAEgBQAAAAAAAAAAUAFgBiAAAAAAAAAAYACQB4AAAAAAAAAAgAHACBAAEAAAAAAAEAEgAAAAEAAAAAAAIADgASAAEAAAAAAAMAMAAgAAEAAAAAAAQAEgBQAAEAAAAAAAUAFgBiAAEAAAAAAAYACQB4AAEAAAAAAAgAHACBAAMAAQQJAAEAEgAAAAMAAQQJAAIADgASAAMAAQQJAAMAMAAgAAMAAQQJAAQAEgBQAAMAAQQJAAUAFgBiAAMAAQQJAAYACQB4AAMAAQQJAAgAHACBAE0AYQB0AGgAIABGAG8AbgB0AFIAZQBnAHUAbABhAHIATQBhAHQAaABzACAARgBvAHIAIABNAG8AcgBlACAATQBhAHQAaAAgAEYAbwBuAHQATQBhAHQAaAAgAEYAbwBuAHQAVgBlAHIAcwBpAG8AbgAgADEALgAwTWF0aF9Gb250AE0AYQB0AGgAcwAgAEYAbwByACAATQBvAHIAZQAAAwAAAAAAAAH0APoAAAAAAAAAAAAAAAAAAAAAAAAAALkHEQAAjYUYALIAAAAVFBOxAAE%2F)format('truetype')%3Bfont-weight%3Anormal%3Bfont-style%3Anormal%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctext%20font-family%3D%22Arial%22%20font-size%3D%2216%22%20font-style%3D%22italic%22%20text-anchor%3D%22middle%22%20x%3D%224.5%22%20y%3D%2216%22%3Eb%3C%2Ftext%3E%3Ctext%20font-family%3D%22math13cec07e9ba5f5bb252d13f5f43%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20x%3D%2218.5%22%20y%3D%2216%22%3E%26%23xF7%3B%3C%2Ftext%3E%3Ctext%20font-family%3D%22ae2ef524fbf3d9fe611d5a8e90fefdc%22%20font-size%3D%2216%22%20font-style%3D%22italic%22%20text-anchor%3D%22middle%22%20x%3D%2230.5%22%20y%3D%2216%22%3Ea%3C%2Ftext%3E%3C%2Fsvg%3E\" alt=\"b divided by a\" height=\"21\" width=\"37\">?</p>",
                "media": null
              }
            ],
            "score": 0,
            "label": "<p>Only II</p>",
            "media": null,
            "value": 0,
            "isCorrect": 0
          },
          {
            "feedback": [
              {
                "text": "<p>Is subtraction commutative for rational numbers?&nbsp;</p><p>Is <img src=\"data:image/svg{{{plus}}}xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Awrs%3D%22http%3A%2F%2Fwww.wiris.com%2Fxml%2Fcvs-extension%22%20height%3D%2221%22%20width%3D%2236%22%20wrs%3Abaseline%3D%2216%22%3E%3C!--MathML%3A%20%3Cmath%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1998%2FMath%2FMathML%22%3E%3Cmi%3Ea%3C%2Fmi%3E%3Cmo%3E-%3C%2Fmo%3E%3Cmi%3Eb%3C%2Fmi%3E%3C%2Fmath%3E--%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%40font-face%7Bfont-family%3A'ae2ef524fbf3d9fe611d5a8e90fefdc'%3Bsrc%3Aurl(data%3Afont%2Ftruetype%3Bcharset%3Dutf-8%3Bbase64%2CAAEAAAAMAIAAAwBAT1MvMjv%2FLJYAAADMAAAATmNtYXDgWxEdAAABHAAAADRjdnQgAAAABwAAAVAAAAAEZ2x5ZoYrxVAAAAFUAAAA0WhlYWQOdyayAAACKAAAADZoaGVhC0UVwQAAAmAAAAAkaG10eCg8AIUAAAKEAAAACGxvY2EAAAVKAAACjAAAAAxtYXhwBIoEWwAAApgAAAAgbmFtZXSF9ZsAAAK4AAABrXBvc3QDogHPAAAEaAAAACBwcmVwukanGAAABIgAAAANAAAGtAGQAAUAAAgACAAAAAAACAAIAAAAAAAAAQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAAAAAg8AMGe%2F57AAAHPgGyAAAAAAACAAEAAQAAABQAAwABAAAAFAAEACAAAAAEAAQAAQAAAGH%2F%2FwAAAGH%2F%2F%2F%2BgAAEAAAAAAAAABwACAFUAAAMAA6sAAwAHAAAzESERJSERIVUCq%2F2rAgD%2BAAOr%2FFVVAwAAAwAt%2F3QEAwRZAAsAFwAdADsYAbAdELAD1LADELAU1LAUELAc1LAcELAJ1LAcELAOPLAJELAbPACwBhCwEdSwBhCwANSwABCwF9QwMQEiABEWEjMyEjcQJgYWAwIGIyImNTQ2MwE1BhMjEgIBs%2F7fFvWy07oDhYZwFgxOhVmysoUB7YwEslEEWf7f%2Ft71%2Ft8BM%2BMBp5yyLf6d%2FwBlyJzfsvxZjF0B5%2F1eAAAAAAEAAAABAACav9usXw889QADCAD%2F%2F%2F%2F%2F1a3uPf%2F%2F%2F%2F%2FVre49AAH%2B9QQDBkMAAAAKAAIAAQAAAAAAAQAABz7%2BTgAAF3AAAf%2F8BAMAAQAAAAAAAAAAAAAAAAAAAAIDUgBVBEwALQAAAAAAAAAoAAAA0QABAAAAAgAeAAMAAAAAAAIAgAQAAAAAAAQAADsAAAAAAAAAFQECAAAAAAAAAAEAFgAAAAAAAAAAAAIADgAWAAAAAAAAAAMANAAkAAAAAAAAAAQAFgBYAAAAAAAAAAUAFgBuAAAAAAAAAAYACwCEAAAAAAAAAAgAHACPAAEAAAAAAAEAFgAAAAEAAAAAAAIADgAWAAEAAAAAAAMANAAkAAEAAAAAAAQAFgBYAAEAAAAAAAUAFgBuAAEAAAAAAAYACwCEAAEAAAAAAAgAHACPAAMAAQQJAAEAFgAAAAMAAQQJAAIADgAWAAMAAQQJAAMANAAkAAMAAQQJAAQAFgBYAAMAAQQJAAUAFgBuAAMAAQQJAAYACwCEAAMAAQQJAAgAHACPAE0AYQB0AGgAIABGAG8AbgB0ACAAMgBSAGUAZwB1AGwAYQByAE0AYQB0AGgAcwAgAEYAbwByACAATQBvAHIAZQAgAE0AYQB0AGgAIABGAG8AbgB0ACAAMgBNAGEAdABoACAARgBvAG4AdAAgADIAVgBlAHIAcwBpAG8AbgAgADEALgAwTWF0aF9Gb250XzIATQBhAHQAaABzACAARgBvAHIAIABNAG8AcgBlAAAAAAMAAAAAAAADnwHPAAAAAAAAAAAAAAAAAAAAAAAAAAC5ByIAAI2FGACyAAAAAAAA)format('truetype')%3Bfont-weight%3Anormal%3Bfont-style%3Anormal%3B%7D%40font-face%7Bfont-family%3A'math1da40657c9fece7e48d30af42d3'%3Bsrc%3Aurl(data%3Afont%2Ftruetype%3Bcharset%3Dutf-8%3Bbase64%2CAAEAAAAMAIAAAwBAT1MvMi7iBBMAAADMAAAATmNtYXDEvmKUAAABHAAAADRjdnQgDVUNBwAAAVAAAAA6Z2x5ZoPi2VsAAAGMAAAAcmhlYWQQC2qxAAACAAAAADZoaGVhCGsXSAAAAjgAAAAkaG10eE2rRkcAAAJcAAAACGxvY2EAHTwYAAACZAAAAAxtYXhwBT0FPgAAAnAAAAAgbmFtZaBxlY4AAAKQAAABn3Bvc3QB9wD6AAAEMAAAACBwcmVwa1uragAABFAAAAAUAAADSwGQAAUAAAQABAAAAAAABAAEAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAAAAAg1UADev96AAAD6ACWAAAAAAACAAEAAQAAABQAAwABAAAAFAAEACAAAAAEAAQAAQAAIhL%2F%2FwAAIhL%2F%2F93vAAEAAAAAAAABVAMsAIABAABWACoCWAIeAQ4BLAIsAFoBgAKAAKAA1ACAAAAAAAAAACsAVQCAAKsA1QEAASsABwAAAAIAVQAAAwADqwADAAcAADMRIRElIREhVQKr%2FasCAP4AA6v8VVUDAAABAIABVQLVAasAAwAwGAGwBBCxAAP2sAM8sQIH9bABPLEFA%2BYAsQAAExCxAAblsQABExCwATyxAwX1sAI8EyEVIYACVf2rAatWAAAAAQAAAAEAANV4zkFfDzz1AAMEAP%2F%2F%2F%2F%2FWOhNz%2F%2F%2F%2F%2F9Y6E3MAAP8gBIADqwAAAAoAAgABAAAAAAABAAAD6P9qAAAXcAAA%2F7YEgAABAAAAAAAAAAAAAAAAAAAAAgNSAFUDVgCAAAAAAAAAACgAAAByAAEAAAACAF4ABQAAAAAAAgCABAAAAAAABAAA3gAAAAAAAAAVAQIAAAAAAAAAAQASAAAAAAAAAAAAAgAOABIAAAAAAAAAAwAwACAAAAAAAAAABAASAFAAAAAAAAAABQAWAGIAAAAAAAAABgAJAHgAAAAAAAAACAAcAIEAAQAAAAAAAQASAAAAAQAAAAAAAgAOABIAAQAAAAAAAwAwACAAAQAAAAAABAASAFAAAQAAAAAABQAWAGIAAQAAAAAABgAJAHgAAQAAAAAACAAcAIEAAwABBAkAAQASAAAAAwABBAkAAgAOABIAAwABBAkAAwAwACAAAwABBAkABAASAFAAAwABBAkABQAWAGIAAwABBAkABgAJAHgAAwABBAkACAAcAIEATQBhAHQAaAAgAEYAbwBuAHQAUgBlAGcAdQBsAGEAcgBNAGEAdABoAHMAIABGAG8AcgAgAE0AbwByAGUAIABNAGEAdABoACAARgBvAG4AdABNAGEAdABoACAARgBvAG4AdABWAGUAcgBzAGkAbwBuACAAMQAuADBNYXRoX0ZvbnQATQBhAHQAaABzACAARgBvAHIAIABNAG8AcgBlAAADAAAAAAAAAfQA%2BgAAAAAAAAAAAAAAAAAAAAAAAAAAuQcRAACNhRgAsgAAABUUE7EAAT8%3D)format('truetype')%3Bfont-weight%3Anormal%3Bfont-style%3Anormal%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctext%20font-family%3D%22ae2ef524fbf3d9fe611d5a8e90fefdc%22%20font-size%3D%2216%22%20font-style%3D%22italic%22%20text-anchor%3D%22middle%22%20x%3D%224.5%22%20y%3D%2216%22%3Ea%3C%2Ftext%3E%3Ctext%20font-family%3D%22math1da40657c9fece7e48d30af42d3%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20x%3D%2217.5%22%20y%3D%2216%22%3E%26%23x2212%3B%3C%2Ftext%3E%3Ctext%20font-family%3D%22Arial%22%20font-size%3D%2216%22%20font-style%3D%22italic%22%20text-anchor%3D%22middle%22%20x%3D%2229.5%22%20y%3D%2216%22%3Eb%3C%2Ftext%3E%3C%2Fsvg%3E\" alt=\"a minus b\" height=\"21\" width=\"36\"> always equal to <img src=\"data:image/svg{{{plus}}}xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Awrs%3D%22http%3A%2F%2Fwww.wiris.com%2Fxml%2Fcvs-extension%22%20height%3D%2221%22%20width%3D%2236%22%20wrs%3Abaseline%3D%2216%22%3E%3C!--MathML%3A%20%3Cmath%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1998%2FMath%2FMathML%22%3E%3Cmi%3Eb%3C%2Fmi%3E%3Cmo%3E-%3C%2Fmo%3E%3Cmi%3Ea%3C%2Fmi%3E%3C%2Fmath%3E--%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%40font-face%7Bfont-family%3A'ae2ef524fbf3d9fe611d5a8e90fefdc'%3Bsrc%3Aurl(data%3Afont%2Ftruetype%3Bcharset%3Dutf-8%3Bbase64%2CAAEAAAAMAIAAAwBAT1MvMjv%2FLJYAAADMAAAATmNtYXDgWxEdAAABHAAAADRjdnQgAAAABwAAAVAAAAAEZ2x5ZoYrxVAAAAFUAAAA0WhlYWQOdyayAAACKAAAADZoaGVhC0UVwQAAAmAAAAAkaG10eCg8AIUAAAKEAAAACGxvY2EAAAVKAAACjAAAAAxtYXhwBIoEWwAAApgAAAAgbmFtZXSF9ZsAAAK4AAABrXBvc3QDogHPAAAEaAAAACBwcmVwukanGAAABIgAAAANAAAGtAGQAAUAAAgACAAAAAAACAAIAAAAAAAAAQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAAAAAg8AMGe%2F57AAAHPgGyAAAAAAACAAEAAQAAABQAAwABAAAAFAAEACAAAAAEAAQAAQAAAGH%2F%2FwAAAGH%2F%2F%2F%2BgAAEAAAAAAAAABwACAFUAAAMAA6sAAwAHAAAzESERJSERIVUCq%2F2rAgD%2BAAOr%2FFVVAwAAAwAt%2F3QEAwRZAAsAFwAdADsYAbAdELAD1LADELAU1LAUELAc1LAcELAJ1LAcELAOPLAJELAbPACwBhCwEdSwBhCwANSwABCwF9QwMQEiABEWEjMyEjcQJgYWAwIGIyImNTQ2MwE1BhMjEgIBs%2F7fFvWy07oDhYZwFgxOhVmysoUB7YwEslEEWf7f%2Ft71%2Ft8BM%2BMBp5yyLf6d%2FwBlyJzfsvxZjF0B5%2F1eAAAAAAEAAAABAACav9usXw889QADCAD%2F%2F%2F%2F%2F1a3uPf%2F%2F%2F%2F%2FVre49AAH%2B9QQDBkMAAAAKAAIAAQAAAAAAAQAABz7%2BTgAAF3AAAf%2F8BAMAAQAAAAAAAAAAAAAAAAAAAAIDUgBVBEwALQAAAAAAAAAoAAAA0QABAAAAAgAeAAMAAAAAAAIAgAQAAAAAAAQAADsAAAAAAAAAFQECAAAAAAAAAAEAFgAAAAAAAAAAAAIADgAWAAAAAAAAAAMANAAkAAAAAAAAAAQAFgBYAAAAAAAAAAUAFgBuAAAAAAAAAAYACwCEAAAAAAAAAAgAHACPAAEAAAAAAAEAFgAAAAEAAAAAAAIADgAWAAEAAAAAAAMANAAkAAEAAAAAAAQAFgBYAAEAAAAAAAUAFgBuAAEAAAAAAAYACwCEAAEAAAAAAAgAHACPAAMAAQQJAAEAFgAAAAMAAQQJAAIADgAWAAMAAQQJAAMANAAkAAMAAQQJAAQAFgBYAAMAAQQJAAUAFgBuAAMAAQQJAAYACwCEAAMAAQQJAAgAHACPAE0AYQB0AGgAIABGAG8AbgB0ACAAMgBSAGUAZwB1AGwAYQByAE0AYQB0AGgAcwAgAEYAbwByACAATQBvAHIAZQAgAE0AYQB0AGgAIABGAG8AbgB0ACAAMgBNAGEAdABoACAARgBvAG4AdAAgADIAVgBlAHIAcwBpAG8AbgAgADEALgAwTWF0aF9Gb250XzIATQBhAHQAaABzACAARgBvAHIAIABNAG8AcgBlAAAAAAMAAAAAAAADnwHPAAAAAAAAAAAAAAAAAAAAAAAAAAC5ByIAAI2FGACyAAAAAAAA)format('truetype')%3Bfont-weight%3Anormal%3Bfont-style%3Anormal%3B%7D%40font-face%7Bfont-family%3A'math1da40657c9fece7e48d30af42d3'%3Bsrc%3Aurl(data%3Afont%2Ftruetype%3Bcharset%3Dutf-8%3Bbase64%2CAAEAAAAMAIAAAwBAT1MvMi7iBBMAAADMAAAATmNtYXDEvmKUAAABHAAAADRjdnQgDVUNBwAAAVAAAAA6Z2x5ZoPi2VsAAAGMAAAAcmhlYWQQC2qxAAACAAAAADZoaGVhCGsXSAAAAjgAAAAkaG10eE2rRkcAAAJcAAAACGxvY2EAHTwYAAACZAAAAAxtYXhwBT0FPgAAAnAAAAAgbmFtZaBxlY4AAAKQAAABn3Bvc3QB9wD6AAAEMAAAACBwcmVwa1uragAABFAAAAAUAAADSwGQAAUAAAQABAAAAAAABAAEAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAAAAAg1UADev96AAAD6ACWAAAAAAACAAEAAQAAABQAAwABAAAAFAAEACAAAAAEAAQAAQAAIhL%2F%2FwAAIhL%2F%2F93vAAEAAAAAAAABVAMsAIABAABWACoCWAIeAQ4BLAIsAFoBgAKAAKAA1ACAAAAAAAAAACsAVQCAAKsA1QEAASsABwAAAAIAVQAAAwADqwADAAcAADMRIRElIREhVQKr%2FasCAP4AA6v8VVUDAAABAIABVQLVAasAAwAwGAGwBBCxAAP2sAM8sQIH9bABPLEFA%2BYAsQAAExCxAAblsQABExCwATyxAwX1sAI8EyEVIYACVf2rAatWAAAAAQAAAAEAANV4zkFfDzz1AAMEAP%2F%2F%2F%2F%2FWOhNz%2F%2F%2F%2F%2F9Y6E3MAAP8gBIADqwAAAAoAAgABAAAAAAABAAAD6P9qAAAXcAAA%2F7YEgAABAAAAAAAAAAAAAAAAAAAAAgNSAFUDVgCAAAAAAAAAACgAAAByAAEAAAACAF4ABQAAAAAAAgCABAAAAAAABAAA3gAAAAAAAAAVAQIAAAAAAAAAAQASAAAAAAAAAAAAAgAOABIAAAAAAAAAAwAwACAAAAAAAAAABAASAFAAAAAAAAAABQAWAGIAAAAAAAAABgAJAHgAAAAAAAAACAAcAIEAAQAAAAAAAQASAAAAAQAAAAAAAgAOABIAAQAAAAAAAwAwACAAAQAAAAAABAASAFAAAQAAAAAABQAWAGIAAQAAAAAABgAJAHgAAQAAAAAACAAcAIEAAwABBAkAAQASAAAAAwABBAkAAgAOABIAAwABBAkAAwAwACAAAwABBAkABAASAFAAAwABBAkABQAWAGIAAwABBAkABgAJAHgAAwABBAkACAAcAIEATQBhAHQAaAAgAEYAbwBuAHQAUgBlAGcAdQBsAGEAcgBNAGEAdABoAHMAIABGAG8AcgAgAE0AbwByAGUAIABNAGEAdABoACAARgBvAG4AdABNAGEAdABoACAARgBvAG4AdABWAGUAcgBzAGkAbwBuACAAMQAuADBNYXRoX0ZvbnQATQBhAHQAaABzACAARgBvAHIAIABNAG8AcgBlAAADAAAAAAAAAfQA%2BgAAAAAAAAAAAAAAAAAAAAAAAAAAuQcRAACNhRgAsgAAABUUE7EAAT8%3D)format('truetype')%3Bfont-weight%3Anormal%3Bfont-style%3Anormal%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctext%20font-family%3D%22Arial%22%20font-size%3D%2216%22%20font-style%3D%22italic%22%20text-anchor%3D%22middle%22%20x%3D%224.5%22%20y%3D%2216%22%3Eb%3C%2Ftext%3E%3Ctext%20font-family%3D%22math1da40657c9fece7e48d30af42d3%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20x%3D%2217.5%22%20y%3D%2216%22%3E%26%23x2212%3B%3C%2Ftext%3E%3Ctext%20font-family%3D%22ae2ef524fbf3d9fe611d5a8e90fefdc%22%20font-size%3D%2216%22%20font-style%3D%22italic%22%20text-anchor%3D%22middle%22%20x%3D%2229.5%22%20y%3D%2216%22%3Ea%3C%2Ftext%3E%3C%2Fsvg%3E\" alt=\"b minus a\" height=\"21\" width=\"36\">?</p>",
                "media": null
              }
            ],
            "score": 0,
            "label": "<p>Only IV</p>",
            "media": null,
            "value": 1,
            "isCorrect": 0
          },
          {
            "feedback": [
              {
                "text": "<p>Changing the order of the numbers in subtraction and division may result in a different value. Therefore, subtraction and division are not commutative for rational numbers.</p>",
                "media": null
              }
            ],
            "score": 1,
            "label": "<p>Both II and IV</p>",
            "media": null,
            "value": 2,
            "isCorrect": 1
          },
          {
            "feedback": [
              {
                "text": "<p>Is multiplication not commutative for rational numbers? When is&nbsp;<img src=\"data:image/svg{{{plus}}}xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Awrs%3D%22http%3A%2F%2Fwww.wiris.com%2Fxml%2Fcvs-extension%22%20height%3D%2221%22%20width%3D%2236%22%20wrs%3Abaseline%3D%2216%22%3E%3C!--MathML%3A%20%3Cmath%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1998%2FMath%2FMathML%22%3E%3Cmi%3Ea%3C%2Fmi%3E%3Cmo%3E%26%23xD7%3B%3C%2Fmo%3E%3Cmi%3Eb%3C%2Fmi%3E%3C%2Fmath%3E--%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%40font-face%7Bfont-family%3A'ae2ef524fbf3d9fe611d5a8e90fefdc'%3Bsrc%3Aurl(data%3Afont%2Ftruetype%3Bcharset%3Dutf-8%3Bbase64%2CAAEAAAAMAIAAAwBAT1MvMjv%2FLJYAAADMAAAATmNtYXDgWxEdAAABHAAAADRjdnQgAAAABwAAAVAAAAAEZ2x5ZoYrxVAAAAFUAAAA0WhlYWQOdyayAAACKAAAADZoaGVhC0UVwQAAAmAAAAAkaG10eCg8AIUAAAKEAAAACGxvY2EAAAVKAAACjAAAAAxtYXhwBIoEWwAAApgAAAAgbmFtZXSF9ZsAAAK4AAABrXBvc3QDogHPAAAEaAAAACBwcmVwukanGAAABIgAAAANAAAGtAGQAAUAAAgACAAAAAAACAAIAAAAAAAAAQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAAAAAg8AMGe%2F57AAAHPgGyAAAAAAACAAEAAQAAABQAAwABAAAAFAAEACAAAAAEAAQAAQAAAGH%2F%2FwAAAGH%2F%2F%2F%2BgAAEAAAAAAAAABwACAFUAAAMAA6sAAwAHAAAzESERJSERIVUCq%2F2rAgD%2BAAOr%2FFVVAwAAAwAt%2F3QEAwRZAAsAFwAdADsYAbAdELAD1LADELAU1LAUELAc1LAcELAJ1LAcELAOPLAJELAbPACwBhCwEdSwBhCwANSwABCwF9QwMQEiABEWEjMyEjcQJgYWAwIGIyImNTQ2MwE1BhMjEgIBs%2F7fFvWy07oDhYZwFgxOhVmysoUB7YwEslEEWf7f%2Ft71%2Ft8BM%2BMBp5yyLf6d%2FwBlyJzfsvxZjF0B5%2F1eAAAAAAEAAAABAACav9usXw889QADCAD%2F%2F%2F%2F%2F1a3uPf%2F%2F%2F%2F%2FVre49AAH%2B9QQDBkMAAAAKAAIAAQAAAAAAAQAABz7%2BTgAAF3AAAf%2F8BAMAAQAAAAAAAAAAAAAAAAAAAAIDUgBVBEwALQAAAAAAAAAoAAAA0QABAAAAAgAeAAMAAAAAAAIAgAQAAAAAAAQAADsAAAAAAAAAFQECAAAAAAAAAAEAFgAAAAAAAAAAAAIADgAWAAAAAAAAAAMANAAkAAAAAAAAAAQAFgBYAAAAAAAAAAUAFgBuAAAAAAAAAAYACwCEAAAAAAAAAAgAHACPAAEAAAAAAAEAFgAAAAEAAAAAAAIADgAWAAEAAAAAAAMANAAkAAEAAAAAAAQAFgBYAAEAAAAAAAUAFgBuAAEAAAAAAAYACwCEAAEAAAAAAAgAHACPAAMAAQQJAAEAFgAAAAMAAQQJAAIADgAWAAMAAQQJAAMANAAkAAMAAQQJAAQAFgBYAAMAAQQJAAUAFgBuAAMAAQQJAAYACwCEAAMAAQQJAAgAHACPAE0AYQB0AGgAIABGAG8AbgB0ACAAMgBSAGUAZwB1AGwAYQByAE0AYQB0AGgAcwAgAEYAbwByACAATQBvAHIAZQAgAE0AYQB0AGgAIABGAG8AbgB0ACAAMgBNAGEAdABoACAARgBvAG4AdAAgADIAVgBlAHIAcwBpAG8AbgAgADEALgAwTWF0aF9Gb250XzIATQBhAHQAaABzACAARgBvAHIAIABNAG8AcgBlAAAAAAMAAAAAAAADnwHPAAAAAAAAAAAAAAAAAAAAAAAAAAC5ByIAAI2FGACyAAAAAAAA)format('truetype')%3Bfont-weight%3Anormal%3Bfont-style%3Anormal%3B%7D%40font-face%7Bfont-family%3A'math13b8a614226a953a8cd9526fca6'%3Bsrc%3Aurl(data%3Afont%2Ftruetype%3Bcharset%3Dutf-8%3Bbase64%2CAAEAAAAMAIAAAwBAT1MvMi7iBBMAAADMAAAATmNtYXDEvmKUAAABHAAAADRjdnQgDVUNBwAAAVAAAAA6Z2x5ZoPi2VsAAAGMAAAAl2hlYWQQC2qxAAACJAAAADZoaGVhCGsXSAAAAlwAAAAkaG10eE2rRkcAAAKAAAAACGxvY2EAHTwYAAACiAAAAAxtYXhwBT0FPgAAApQAAAAgbmFtZaBxlY4AAAK0AAABn3Bvc3QB9wD6AAAEVAAAACBwcmVwa1uragAABHQAAAAUAAADSwGQAAUAAAQABAAAAAAABAAEAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAAAAAg1UADev96AAAD6ACWAAAAAAACAAEAAQAAABQAAwABAAAAFAAEACAAAAAEAAQAAQAAANf%2F%2FwAAANf%2F%2F%2F8qAAEAAAAAAAABVAMsAIABAABWACoCWAIeAQ4BLAIsAFoBgAKAAKAA1ACAAAAAAAAAACsAVQCAAKsA1QEAASsABwAAAAIAVQAAAwADqwADAAcAADMRIRElIREhVQKr%2FasCAP4AA6v8VVUDAAACAIAAVQLVAoAAAwAHAEYYsAEUALEAABMQsQAJ5LEAARMQsAQ8sQYI9LACPDABsQgBExCxAAP2sAc8sQEF9bAGPLIFBwAQ9LACPLEJA%2BaxBAX1sAM8EzMBIxEzASOAVQIAVVX%2BAFUCgP3VAiv91QAAAQAAAAEAANV4zkFfDzz1AAMEAP%2F%2F%2F%2F%2FWOhNz%2F%2F%2F%2F%2F9Y6E3MAAP8gBIADqwAAAAoAAgABAAAAAAABAAAD6P9qAAAXcAAA%2F7YEgAABAAAAAAAAAAAAAAAAAAAAAgNSAFUDVgCAAAAAAAAAACgAAACXAAEAAAACAF4ABQAAAAAAAgCABAAAAAAABAAA3gAAAAAAAAAVAQIAAAAAAAAAAQASAAAAAAAAAAAAAgAOABIAAAAAAAAAAwAwACAAAAAAAAAABAASAFAAAAAAAAAABQAWAGIAAAAAAAAABgAJAHgAAAAAAAAACAAcAIEAAQAAAAAAAQASAAAAAQAAAAAAAgAOABIAAQAAAAAAAwAwACAAAQAAAAAABAASAFAAAQAAAAAABQAWAGIAAQAAAAAABgAJAHgAAQAAAAAACAAcAIEAAwABBAkAAQASAAAAAwABBAkAAgAOABIAAwABBAkAAwAwACAAAwABBAkABAASAFAAAwABBAkABQAWAGIAAwABBAkABgAJAHgAAwABBAkACAAcAIEATQBhAHQAaAAgAEYAbwBuAHQAUgBlAGcAdQBsAGEAcgBNAGEAdABoAHMAIABGAG8AcgAgAE0AbwByAGUAIABNAGEAdABoACAARgBvAG4AdABNAGEAdABoACAARgBvAG4AdABWAGUAcgBzAGkAbwBuACAAMQAuADBNYXRoX0ZvbnQATQBhAHQAaABzACAARgBvAHIAIABNAG8AcgBlAAADAAAAAAAAAfQA%2BgAAAAAAAAAAAAAAAAAAAAAAAAAAuQcRAACNhRgAsgAAABUUE7EAAT8%3D)format('truetype')%3Bfont-weight%3Anormal%3Bfont-style%3Anormal%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctext%20font-family%3D%22ae2ef524fbf3d9fe611d5a8e90fefdc%22%20font-size%3D%2216%22%20font-style%3D%22italic%22%20text-anchor%3D%22middle%22%20x%3D%224.5%22%20y%3D%2216%22%3Ea%3C%2Ftext%3E%3Ctext%20font-family%3D%22math13b8a614226a953a8cd9526fca6%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20x%3D%2217.5%22%20y%3D%2216%22%3E%26%23xD7%3B%3C%2Ftext%3E%3Ctext%20font-family%3D%22Arial%22%20font-size%3D%2216%22%20font-style%3D%22italic%22%20text-anchor%3D%22middle%22%20x%3D%2229.5%22%20y%3D%2216%22%3Eb%3C%2Ftext%3E%3C%2Fsvg%3E\" alt=\"a cross times b\" height=\"21\" width=\"36\"> not equal to <img src=\"data:image/svg{{{plus}}}xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Awrs%3D%22http%3A%2F%2Fwww.wiris.com%2Fxml%2Fcvs-extension%22%20height%3D%2221%22%20width%3D%2236%22%20wrs%3Abaseline%3D%2216%22%3E%3C!--MathML%3A%20%3Cmath%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1998%2FMath%2FMathML%22%3E%3Cmi%3Eb%3C%2Fmi%3E%3Cmo%3E%26%23xD7%3B%3C%2Fmo%3E%3Cmi%3Ea%3C%2Fmi%3E%3C%2Fmath%3E--%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%40font-face%7Bfont-family%3A'ae2ef524fbf3d9fe611d5a8e90fefdc'%3Bsrc%3Aurl(data%3Afont%2Ftruetype%3Bcharset%3Dutf-8%3Bbase64%2CAAEAAAAMAIAAAwBAT1MvMjv%2FLJYAAADMAAAATmNtYXDgWxEdAAABHAAAADRjdnQgAAAABwAAAVAAAAAEZ2x5ZoYrxVAAAAFUAAAA0WhlYWQOdyayAAACKAAAADZoaGVhC0UVwQAAAmAAAAAkaG10eCg8AIUAAAKEAAAACGxvY2EAAAVKAAACjAAAAAxtYXhwBIoEWwAAApgAAAAgbmFtZXSF9ZsAAAK4AAABrXBvc3QDogHPAAAEaAAAACBwcmVwukanGAAABIgAAAANAAAGtAGQAAUAAAgACAAAAAAACAAIAAAAAAAAAQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAAAAAg8AMGe%2F57AAAHPgGyAAAAAAACAAEAAQAAABQAAwABAAAAFAAEACAAAAAEAAQAAQAAAGH%2F%2FwAAAGH%2F%2F%2F%2BgAAEAAAAAAAAABwACAFUAAAMAA6sAAwAHAAAzESERJSERIVUCq%2F2rAgD%2BAAOr%2FFVVAwAAAwAt%2F3QEAwRZAAsAFwAdADsYAbAdELAD1LADELAU1LAUELAc1LAcELAJ1LAcELAOPLAJELAbPACwBhCwEdSwBhCwANSwABCwF9QwMQEiABEWEjMyEjcQJgYWAwIGIyImNTQ2MwE1BhMjEgIBs%2F7fFvWy07oDhYZwFgxOhVmysoUB7YwEslEEWf7f%2Ft71%2Ft8BM%2BMBp5yyLf6d%2FwBlyJzfsvxZjF0B5%2F1eAAAAAAEAAAABAACav9usXw889QADCAD%2F%2F%2F%2F%2F1a3uPf%2F%2F%2F%2F%2FVre49AAH%2B9QQDBkMAAAAKAAIAAQAAAAAAAQAABz7%2BTgAAF3AAAf%2F8BAMAAQAAAAAAAAAAAAAAAAAAAAIDUgBVBEwALQAAAAAAAAAoAAAA0QABAAAAAgAeAAMAAAAAAAIAgAQAAAAAAAQAADsAAAAAAAAAFQECAAAAAAAAAAEAFgAAAAAAAAAAAAIADgAWAAAAAAAAAAMANAAkAAAAAAAAAAQAFgBYAAAAAAAAAAUAFgBuAAAAAAAAAAYACwCEAAAAAAAAAAgAHACPAAEAAAAAAAEAFgAAAAEAAAAAAAIADgAWAAEAAAAAAAMANAAkAAEAAAAAAAQAFgBYAAEAAAAAAAUAFgBuAAEAAAAAAAYACwCEAAEAAAAAAAgAHACPAAMAAQQJAAEAFgAAAAMAAQQJAAIADgAWAAMAAQQJAAMANAAkAAMAAQQJAAQAFgBYAAMAAQQJAAUAFgBuAAMAAQQJAAYACwCEAAMAAQQJAAgAHACPAE0AYQB0AGgAIABGAG8AbgB0ACAAMgBSAGUAZwB1AGwAYQByAE0AYQB0AGgAcwAgAEYAbwByACAATQBvAHIAZQAgAE0AYQB0AGgAIABGAG8AbgB0ACAAMgBNAGEAdABoACAARgBvAG4AdAAgADIAVgBlAHIAcwBpAG8AbgAgADEALgAwTWF0aF9Gb250XzIATQBhAHQAaABzACAARgBvAHIAIABNAG8AcgBlAAAAAAMAAAAAAAADnwHPAAAAAAAAAAAAAAAAAAAAAAAAAAC5ByIAAI2FGACyAAAAAAAA)format('truetype')%3Bfont-weight%3Anormal%3Bfont-style%3Anormal%3B%7D%40font-face%7Bfont-family%3A'math13b8a614226a953a8cd9526fca6'%3Bsrc%3Aurl(data%3Afont%2Ftruetype%3Bcharset%3Dutf-8%3Bbase64%2CAAEAAAAMAIAAAwBAT1MvMi7iBBMAAADMAAAATmNtYXDEvmKUAAABHAAAADRjdnQgDVUNBwAAAVAAAAA6Z2x5ZoPi2VsAAAGMAAAAl2hlYWQQC2qxAAACJAAAADZoaGVhCGsXSAAAAlwAAAAkaG10eE2rRkcAAAKAAAAACGxvY2EAHTwYAAACiAAAAAxtYXhwBT0FPgAAApQAAAAgbmFtZaBxlY4AAAK0AAABn3Bvc3QB9wD6AAAEVAAAACBwcmVwa1uragAABHQAAAAUAAADSwGQAAUAAAQABAAAAAAABAAEAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAAAAAg1UADev96AAAD6ACWAAAAAAACAAEAAQAAABQAAwABAAAAFAAEACAAAAAEAAQAAQAAANf%2F%2FwAAANf%2F%2F%2F8qAAEAAAAAAAABVAMsAIABAABWACoCWAIeAQ4BLAIsAFoBgAKAAKAA1ACAAAAAAAAAACsAVQCAAKsA1QEAASsABwAAAAIAVQAAAwADqwADAAcAADMRIRElIREhVQKr%2FasCAP4AA6v8VVUDAAACAIAAVQLVAoAAAwAHAEYYsAEUALEAABMQsQAJ5LEAARMQsAQ8sQYI9LACPDABsQgBExCxAAP2sAc8sQEF9bAGPLIFBwAQ9LACPLEJA%2BaxBAX1sAM8EzMBIxEzASOAVQIAVVX%2BAFUCgP3VAiv91QAAAQAAAAEAANV4zkFfDzz1AAMEAP%2F%2F%2F%2F%2FWOhNz%2F%2F%2F%2F%2F9Y6E3MAAP8gBIADqwAAAAoAAgABAAAAAAABAAAD6P9qAAAXcAAA%2F7YEgAABAAAAAAAAAAAAAAAAAAAAAgNSAFUDVgCAAAAAAAAAACgAAACXAAEAAAACAF4ABQAAAAAAAgCABAAAAAAABAAA3gAAAAAAAAAVAQIAAAAAAAAAAQASAAAAAAAAAAAAAgAOABIAAAAAAAAAAwAwACAAAAAAAAAABAASAFAAAAAAAAAABQAWAGIAAAAAAAAABgAJAHgAAAAAAAAACAAcAIEAAQAAAAAAAQASAAAAAQAAAAAAAgAOABIAAQAAAAAAAwAwACAAAQAAAAAABAASAFAAAQAAAAAABQAWAGIAAQAAAAAABgAJAHgAAQAAAAAACAAcAIEAAwABBAkAAQASAAAAAwABBAkAAgAOABIAAwABBAkAAwAwACAAAwABBAkABAASAFAAAwABBAkABQAWAGIAAwABBAkABgAJAHgAAwABBAkACAAcAIEATQBhAHQAaAAgAEYAbwBuAHQAUgBlAGcAdQBsAGEAcgBNAGEAdABoAHMAIABGAG8AcgAgAE0AbwByAGUAIABNAGEAdABoACAARgBvAG4AdABNAGEAdABoACAARgBvAG4AdABWAGUAcgBzAGkAbwBuACAAMQAuADBNYXRoX0ZvbnQATQBhAHQAaABzACAARgBvAHIAIABNAG8AcgBlAAADAAAAAAAAAfQA%2BgAAAAAAAAAAAAAAAAAAAAAAAAAAuQcRAACNhRgAsgAAABUUE7EAAT8%3D)format('truetype')%3Bfont-weight%3Anormal%3Bfont-style%3Anormal%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctext%20font-family%3D%22Arial%22%20font-size%3D%2216%22%20font-style%3D%22italic%22%20text-anchor%3D%22middle%22%20x%3D%224.5%22%20y%3D%2216%22%3Eb%3C%2Ftext%3E%3Ctext%20font-family%3D%22math13b8a614226a953a8cd9526fca6%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20x%3D%2217.5%22%20y%3D%2216%22%3E%26%23xD7%3B%3C%2Ftext%3E%3Ctext%20font-family%3D%22ae2ef524fbf3d9fe611d5a8e90fefdc%22%20font-size%3D%2216%22%20font-style%3D%22italic%22%20text-anchor%3D%22middle%22%20x%3D%2229.5%22%20y%3D%2216%22%3Ea%3C%2Ftext%3E%3C%2Fsvg%3E\" alt=\"b cross times a\" height=\"21\" width=\"36\">?</p>",
                "media": null
              }
            ],
            "score": 0,
            "label": "<p>II, III and IV</p>",
            "media": null,
            "value": 3,
            "isCorrect": 0
          }
        ],
        "style": {},
        "marks": 1,
        "type": "SCQ"
      },
      "solution": {
        "data": [],
        "answer": [
          {
            "text": "<p>Changing the order of the numbers in subtraction and division may result in a different value. Therefore, subtraction and division are not commutative for rational numbers.</p>",
            "media": null
          }
        ],
        "step_nav": false,
        "type": "Solution"
      },
      "attachment": "",
      "solutionStrategies": "",
      "style": {
        "qStyle": {
          "bg": ""
        },
        "userInteraction": {
          "stylePrint": "vertical print scq",
          "stylePreview": "vertical scq",
          "styleReview": "vertical showTick instantFeedback showFeedback scq",
          "styleAttempt": "vertical scq"
        }
      },
      "type": "",
      "widget_type": "response"
    }
  ],
  "resourceType": "quiz",
  "subResourceId": "tqqb-d3cb3e62-f5b3-42d3-b63e-5daa78e2e836",
  "tqId": "tq-7dfc4c41-3ce9-4f2f-b1d4-f79e2a93b2a6",
  "playerType": "practice"
}

let subResourceData1 = {
  "data": [
    {
      "instructions": "<p>Select the correct answer.</p>",
      "metadata": {
        "template_reference": "",
        "name": ""
      },
      "questionID": "tqqb-9f26b2f0-ca48-42fd-b0c0-e35fad7cb5ef",
      "data": {
        "stimulus_media": "",
        "metadata": {
          "duration": 60,
          "difficulty": "Easy",
          "distractor_rationale": {
            "label": "Incorrect feedback",
            "audio": ""
          },
          "bloom": "Recall",
          "acknowledgements": {
            "label": "Correct feedback",
            "audio": ""
          },
          "construct": "costr-cd6ff429-dd26-4fdc-9a11-5b0cb0327126",
          "shuffle": true,
          "version": 1,
          "microConcept": [
            {
              "id": "micro-6957021b-d2f9-49b7-ad28-08ad74eb35ce",
              "label": "Closure property of rational numbers"
            }
          ]
        },
        "stimulus": "<p>A number which can be written in the form <img src=\"data:image/svg{{{plus}}}xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Awrs%3D%22http%3A%2F%2Fwww.wiris.com%2Fxml%2Fcvs-extension%22%20height%3D%2241%22%20width%3D%2219%22%20wrs%3Abaseline%3D%2226%22%3E%3C!--MathML%3A%20%3Cmath%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1998%2FMath%2FMathML%22%3E%3Cmfrac%3E%3Cmi%3Ep%3C%2Fmi%3E%3Cmi%3Eq%3C%2Fmi%3E%3C%2Fmfrac%3E%3C%2Fmath%3E--%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%2F%3E%3C%2Fdefs%3E%3Cline%20stroke%3D%22%23000000%22%20stroke-linecap%3D%22square%22%20stroke-width%3D%221%22%20x1%3D%222.5%22%20x2%3D%2215.5%22%20y1%3D%2220.5%22%20y2%3D%2220.5%22%2F%3E%3Ctext%20font-family%3D%22Arial%22%20font-size%3D%2216%22%20font-style%3D%22italic%22%20text-anchor%3D%22middle%22%20x%3D%228.5%22%20y%3D%2215%22%3Ep%3C%2Ftext%3E%3Ctext%20font-family%3D%22Arial%22%20font-size%3D%2216%22%20font-style%3D%22italic%22%20text-anchor%3D%22middle%22%20x%3D%228.5%22%20y%3D%2237%22%3Eq%3C%2Ftext%3E%3C%2Fsvg%3E\" alt=\"p over q\" height=\"41\" width=\"19\">, where <em>p</em> and <em>q </em>are integers and <em>q</em> ≠ 0 is called a _________.</p>",
        "options": [
          {
            "feedback": [
              {
                "text": "<p>Whole numbers&nbsp;are positive&nbsp;numbers, including zero.</p><p><br></p><p>0, 1, 2, 3 ….. are whole numbers.</p><p>Whole numbers cannot be written in fractional form.</p>",
                "media": null
              }
            ],
            "score": 0,
            "label": "<p>whole number</p>",
            "media": null,
            "value": 0,
            "isCorrect": 0
          },
          {
            "feedback": [
              {
                "text": "<p>Natural numbers are counting numbers like 1, 2, 3 and so on.</p><p>Natural numbers are not written in fractional form.</p>",
                "media": null
              }
            ],
            "score": 0,
            "label": "<p>natural number</p>",
            "media": null,
            "value": 1,
            "isCorrect": 0
          },
          {
            "feedback": [
              {
                "text": "<p>Fractions cannot be negative.</p>",
                "media": null
              }
            ],
            "score": 0,
            "label": "<p>fraction</p>",
            "media": null,
            "value": 2,
            "isCorrect": 0
          },
          {
            "feedback": [
              {
                "text": "<p><span style=\"background-color: rgb(255, 255, 255);\">A number which can be written in the form <img src=\"data:image/svg{{{plus}}}xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Awrs%3D%22http%3A%2F%2Fwww.wiris.com%2Fxml%2Fcvs-extension%22%20height%3D%2241%22%20width%3D%2219%22%20wrs%3Abaseline%3D%2226%22%3E%3C!--MathML%3A%20%3Cmath%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1998%2FMath%2FMathML%22%3E%3Cmfrac%3E%3Cmi%3Ep%3C%2Fmi%3E%3Cmi%3Eq%3C%2Fmi%3E%3C%2Fmfrac%3E%3C%2Fmath%3E--%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%2F%3E%3C%2Fdefs%3E%3Cline%20stroke%3D%22%23000000%22%20stroke-linecap%3D%22square%22%20stroke-width%3D%221%22%20x1%3D%222.5%22%20x2%3D%2215.5%22%20y1%3D%2220.5%22%20y2%3D%2220.5%22%2F%3E%3Ctext%20font-family%3D%22Arial%22%20font-size%3D%2216%22%20font-style%3D%22italic%22%20text-anchor%3D%22middle%22%20x%3D%228.5%22%20y%3D%2215%22%3Ep%3C%2Ftext%3E%3Ctext%20font-family%3D%22Arial%22%20font-size%3D%2216%22%20font-style%3D%22italic%22%20text-anchor%3D%22middle%22%20x%3D%228.5%22%20y%3D%2237%22%3Eq%3C%2Ftext%3E%3C%2Fsvg%3E\" alt=\"p over q\" height=\"41\" width=\"19\">, where </span><em style=\"background-color: rgb(255, 255, 255);\">p</em><span style=\"background-color: rgb(255, 255, 255);\"> and </span><em style=\"background-color: rgb(255, 255, 255);\">q </em><span style=\"background-color: rgb(255, 255, 255);\">are integers and </span><em style=\"background-color: rgb(255, 255, 255);\">q</em><span style=\"background-color: rgb(255, 255, 255);\"> ≠ 0 is called a </span><strong style=\"background-color: rgb(255, 255, 255);\"><u>rational number</u></strong><span style=\"background-color: rgb(255, 255, 255);\">.</span></p>",
                "media": null
              }
            ],
            "score": 1,
            "label": "<p>rational number</p>",
            "media": null,
            "value": 3,
            "isCorrect": 1
          }
        ],
        "style": {},
        "marks": 1,
        "type": "SCQ"
      },
      "solution": {
        "data": [],
        "answer": [
          {
            "text": "<p><span style=\"background-color: rgb(255, 255, 255);\">A number which can be written in the form <img src=\"data:image/svg{{{plus}}}xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Awrs%3D%22http%3A%2F%2Fwww.wiris.com%2Fxml%2Fcvs-extension%22%20height%3D%2241%22%20width%3D%2219%22%20wrs%3Abaseline%3D%2226%22%3E%3C!--MathML%3A%20%3Cmath%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1998%2FMath%2FMathML%22%3E%3Cmfrac%3E%3Cmi%3Ep%3C%2Fmi%3E%3Cmi%3Eq%3C%2Fmi%3E%3C%2Fmfrac%3E%3C%2Fmath%3E--%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%2F%3E%3C%2Fdefs%3E%3Cline%20stroke%3D%22%23000000%22%20stroke-linecap%3D%22square%22%20stroke-width%3D%221%22%20x1%3D%222.5%22%20x2%3D%2215.5%22%20y1%3D%2220.5%22%20y2%3D%2220.5%22%2F%3E%3Ctext%20font-family%3D%22Arial%22%20font-size%3D%2216%22%20font-style%3D%22italic%22%20text-anchor%3D%22middle%22%20x%3D%228.5%22%20y%3D%2215%22%3Ep%3C%2Ftext%3E%3Ctext%20font-family%3D%22Arial%22%20font-size%3D%2216%22%20font-style%3D%22italic%22%20text-anchor%3D%22middle%22%20x%3D%228.5%22%20y%3D%2237%22%3Eq%3C%2Ftext%3E%3C%2Fsvg%3E\" alt=\"p over q\" height=\"41\" width=\"19\">, where </span><em style=\"background-color: rgb(255, 255, 255);\">p</em><span style=\"background-color: rgb(255, 255, 255);\"> and </span><em style=\"background-color: rgb(255, 255, 255);\">q </em><span style=\"background-color: rgb(255, 255, 255);\">are integers and </span><em style=\"background-color: rgb(255, 255, 255);\">q</em><span style=\"background-color: rgb(255, 255, 255);\"> ≠ 0 is called a </span><strong style=\"background-color: rgb(255, 255, 255);\"><u>rational number</u></strong><span style=\"background-color: rgb(255, 255, 255);\">.</span></p>",
            "media": null
          }
        ],
        "step_nav": false,
        "type": "Solution"
      },
      "attachment": "",
      "solutionStrategies": "",
      "style": {
        "qStyle": {
          "bg": ""
        },
        "userInteraction": {
          "stylePrint": "vertical print scq",
          "stylePreview": "vertical scq",
          "styleReview": "vertical showTick instantFeedback showFeedback scq",
          "styleAttempt": "vertical scq"
        }
      },
      "type": "",
      "widget_type": "response"
    }
  ],
  "resourceType": "quiz",
  "subResourceId": "tqqb-9f26b2f0-ca48-42fd-b0c0-e35fad7cb5ef",
  "tqId": "tq-9ab07f86-0c41-4135-8e69-c673d9c67a7f",
  "state": {
    "event": null,
    "qState": 3,
    "attemptCount": 0,
    "pending": 0,
    "confidence": 0,
    "timeTaken": 0,
    "attemptedOption": []
  }
}
// subjective question
let subjectiveSubResourceData = [
  {
    "metadata": {
      "template_reference": "",
      "name": ""
    },
    "questionID": "tq_qb-813d847a-2e7a-4279-a852-cbadf5ad93c8",
    "data": {
      "stimulus_media": null,
      "metadata": {
        "duration": 60,
        "difficulty": "Difficult",
        "distractor_rationale": {
          "label": "Incorrect feedback",
          "audio": ""
        },
        "bloom": "Comprehension",
        "acknowledgements": {
          "label": "Correct feedback",
          "audio": ""
        },
        "construct": "Foundational Facts",
        "shuffle": true,
        "microConcept": [
          {
            "id": 232,
            "label": "India's monsoon season"
          }
        ]
      },
      "solution": {},
      "stimulus": "<p>What is peculiar about India?s monsoon?&nbsp;</p>",
      "options": [
        {
          "feedback": [
            {
              "text": "NA"
            }
          ],
          "score": 1,
          "label": "<p>The amount and duration of rainfall decreases as winds move from south to north and from east to west.&nbsp;</p>",
          "media": null,
          "value": 0,
          "isCorrect": 1
        },
        {
          "feedback": [
            {
              "text": "NA"
            }
          ],
          "score": 1,
          "label": "<p>Coastal areas receive more rains than interiors.&nbsp;</p>",
          "media": null,
          "value": 1,
          "isCorrect": 1
        },
        {
          "feedback": [
            {
              "text": "NA"
            }
          ],
          "score": 1,
          "label": "<p>Monsoon winds are not punctual and regular. Some places may get floods whereas other places may face droughts.</p>",
          "media": null,
          "value": 2,
          "isCorrect": 1
        }
      ],
      "style": {},
      "type": "SUBJECTIVE"
    },
    "style": {
      "qStyle": {
        "bg": ""
      },
      "userInteraction": {
        "style-preview": "vertical subjective",
        "style-attempt": "vertical subjective",
        "style-review": "vertical showTick instantFeedback showFeedback subjective",
        "style-print": "vertical print subjective"
      }
    },
    "type": "",
    "widget_type": "response"
  }
]

let subjectiveSubResource = {
  data: subjectiveSubResourceData,
  state: {
    "event": "onOptClick",
    "attemptedOption": [
      {
        "qid": "tq_qb-813d847a-2e7a-4279-a852-cbadf5ad93c8",
        "options": [
          "<p> hg yugfyugf</p>"
        ]
      }
    ],
    "qState": false,
    "attemptCount": 0,
    "pending": 0,
    "confidence": 0
  },
  resourceType: 'SUBJECTIVE',
  subResourceId: "tq_qb-813d847a-2e7a-4279-a852-cbadf5ad93c8"
}
// SCQ quiz
let scqSubResourceData = [
  {
    "metadata": {
      "template_reference": "",
      "name": ""
    },
    "questionID": "tq_qb-0b2ae24c-8350-43cb-914d-82fc7617d178",
    "data": {
      "stimulus_media": null,
      "metadata": {
        "duration": 60,
        "difficulty": "Average",
        "distractor_rationale": {
          "label": "Incorrect feedback",
          "audio": ""
        },
        "bloom": "Recall",
        "acknowledgements": {
          "label": "Correct feedback",
          "audio": ""
        },
        "construct": "Foundational Facts",
        "shuffle": true,
        "microConcept": [
          {
            "id": 232,
            "label": "India's monsoon season"
          }
        ]
      },
      "solution": {},
      "stimulus": "<p>What is the duration of the rainy season in most of India?</p>",
      "options": [
        {
          "feedback": [
            {
              "text": "<p>These months are the duration of the summer season. You are closer.</p>"
            }
          ],
          "score": 0,
          "label": "<p>March to May</p>",
          "media": null,
          "value": 0,
          "isCorrect": 0
        },
        {
          "feedback": [
            {
              "text": "<p>The duration of the rainy season in India is from June to September.</p>"
            }
          ],
          "score": 1,
          "label": "<p>June to September</p>",
          "media": null,
          "value": 1,
          "isCorrect": 1
        },
        {
          "feedback": [
            {
              "text": "<p>The months from December to February experience cold weather season or winter.</p>"
            }
          ],
          "score": 0,
          "label": "<p>December to February</p>",
          "media": null,
          "value": 2,
          "isCorrect": 0
        },
        {
          "feedback": [
            {
              "text": "<p>Perhaps you should watch the video again.</p>"
            }
          ],
          "score": 0,
          "label": "<p>February to March</p>",
          "media": null,
          "value": 3,
          "isCorrect": 0
        }
      ],
      "style": {},
      "type": "SCQ"
    },
    "style": {
      "qStyle": {
        "bg": ""
      },
      "userInteraction": {
        "style-preview": "vertical scq",
        "style-attempt": "vertical scq",
        "style-review": "vertical showTick instantFeedback showFeedback scq",
        "style-print": "vertical print scq"
      }
    },
    "type": "",
    "widget_type": "response"
  }
]

let scqSubResource = {
  "data": [
    {
      "instructions": "<p>Select the correct answer.</p>",
      "metadata": {
        "template_reference": "",
        "name": ""
      },
      "questionID": "tqqb-3b426120-5858-4614-8ce4-af5c82176010",
      "data": {
        "stimulus_media": "",
        "metadata": {
          "duration": 60,
          "difficulty": "Easy",
          "distractor_rationale": {
            "label": "Incorrect feedback",
            "audio": ""
          },
          "bloom": "Recall",
          "acknowledgements": {
            "label": "Correct feedback",
            "audio": ""
          },
          "construct": "costr-b8587f5d-2612-4571-8234-2115b5c21c82",
          "shuffle": true,
          "version": 1,
          "microConcept": [
            {
              "id": "micro-1c112a84-329f-43c6-ba37-8ab67eb76b62",
              "label": "Describe self (personal details and contact number of parents)"
            }
          ]
        },
        "stimulus": "<p><strong>Which of these is an identity (ID) card?</strong></p>",
        "options": [
          {
            "feedback": [
              {
                "text": "<p>Try again</p>",
                "media": null
              }
            ],
            "score": 0,
            "label": null,
            "media": "qbimg-5ddd5fa1-3a6b-4b19-8617-23993e3c5ba6.jpg",
            "value": 0,
            "isCorrect": 0
          },
          {
            "feedback": [
              {
                "text": "<p>Try again</p>",
                "media": null
              }
            ],
            "score": 0,
            "label": null,
            "media": "qbimg-32772028-58e7-495a-a1c9-ad49a8cfc274.jpg",
            "value": 1,
            "isCorrect": 0
          },
          {
            "feedback": [
              {
                "text": "<p>Correct</p>",
                "media": null
              }
            ],
            "score": 1,
            "label": null,
            "media": "qbimg-ef857aaf-bac2-49f2-8df0-0a1c22c22d01.jpg",
            "value": 2,
            "isCorrect": 1
          },
          {
            "feedback": [
              {
                "text": "<p>Try again</p>",
                "media": null
              }
            ],
            "score": 0,
            "label": null,
            "media": "qbimg-fc2d9ae1-8312-4883-bfb9-8876644aa6d2.jpg",
            "value": 3,
            "isCorrect": 0
          }
        ],
        "style": {},
        "marks": 1,
        "type": "SCQ"
      },
      "solution": {
        "data": [],
        "answer": [
          {
            "text": "<p>Correct</p>",
            "media": null
          }
        ],
        "step_nav": false,
        "type": "Solution"
      },
      "attachment": "",
      "solutionStrategies": "",
      "style": {
        "qStyle": {
          "bg": ""
        },
        "userInteraction": {
          "stylePrint": "vertical print scq",
          "stylePreview": "vertical scq",
          "styleReview": "vertical showTick instantFeedback showFeedback scq",
          "styleAttempt": "vertical scq"
        }
      },
      "type": "",
      "widget_type": "response"
    }
  ],
  "resourceType": "quiz",
  "subResourceId": "tqqb-3b426120-5858-4614-8ce4-af5c82176010",
  "tqId": "tq-e1a10a18-1743-4e16-a2c1-8a91aa0f2b2e",
  "playerType": "practice"
}
// MCQ quiz
let mcqSubResourceData = [
  {
    "metadata": {
      "template_reference": "",
      "name": ""
    },
    "questionID": "tq_qb-6a38c60c-e4c2-4f14-af63-0397b5802106",
    "data": {
      "stimulus_media": null,
      "metadata": {
        "duration": 60,
        "difficulty": "Average",
        "distractor_rationale": {
          "label": "Incorrect feedback",
          "audio": ""
        },
        "bloom": "Recall",
        "acknowledgements": {
          "label": "Correct feedback",
          "audio": ""
        },
        "construct": "Foundational Facts",
        "shuffle": true,
        "microConcept": [
          {
            "id": 232,
            "label": "India's monsoon season"
          }
        ]
      },
      "solution": {},
      "stimulus": "<p>Which of the following two Indian states get rains in the autumn season?</p>",
      "options": [
        {
          "feedback": [
            {
              "text": "<p>Watch the video again.</p>"
            }
          ],
          "score": 0,
          "label": "<p>Kerala</p>",
          "media": null,
          "value": 0,
          "isCorrect": 0
        },
        {
          "feedback": [
            {
              "text": "<p>Parts of Andhra Pradesh gets rains in autumn from north-east winds.&nbsp;</p>"
            }
          ],
          "score": 1,
          "label": "<p>Andhra Pradesh</p>",
          "media": null,
          "value": 1,
          "isCorrect": 1
        },
        {
          "feedback": [
            {
              "text": "<p>Do you think Rajasthan gets autumn rains?</p>"
            }
          ],
          "score": 0,
          "label": "<p>Rajasthan</p>",
          "media": null,
          "value": 2,
          "isCorrect": 0
        },
        {
          "feedback": [
            {
              "text": "<p>Coastal Tamil Nadu especially gets rains in autumn from north-east winds.</p>"
            }
          ],
          "score": 1,
          "label": "<p>Tamil Nadu</p>",
          "media": null,
          "value": 3,
          "isCorrect": 1
        },
        {
          "feedback": [
            {
              "text": "<p>Madhya Pradesh receives rains only from south west monsoon winds. Try again.&nbsp;</p>"
            }
          ],
          "score": 0,
          "label": "<p>Madhya Pradesh</p>",
          "media": null,
          "value": 4,
          "isCorrect": 0
        }
      ],
      "style": {},
      "type": "MCQ"
    },
    "style": {
      "qStyle": {
        "bg": ""
      },
      "userInteraction": {
        "style-preview": "vertical mcq",
        "style-attempt": "vertical mcq",
        "style-review": "vertical showTick instantFeedback showFeedback mcq",
        "style-print": "vertical print mcq"
      }
    },
    "type": "",
    "widget_type": "response"
  }
]

let mcqSubResource = {
  data: mcqSubResourceData,
  state:{
    "event": "onOptClick",
    "attemptedOption": [
      {
        "qid": "tq_qb-6a38c60c-e4c2-4f14-af63-0397b5802106",
        "options": [
          1,
          4,
          2
        ]
      }
    ],
    "qState": false,
    "attemptCount": 0,
    "pending": 0,
    "confidence": 0.25
  },
  resourceType: 'MCQ',
  subResourceId: "tq_qb-6a38c60c-e4c2-4f14-af63-0397b5802106"
}

let bigIdeaQuiz = [
  {
    "instructions": null,
    "questionID": "tqqb-6b7aec72-c864-494f-8faf-1a01954e770e",
    "data": {
      "stimulus_media": "",
      "metadata": {
        "duration": 60,
        "difficulty": "Easy",
        "distractor_rationale": {
          "label": "Incorrect feedback",
          "audio": ""
        },
        "bloom": "Recall",
        "acknowledgements": {
          "label": "Correct feedback",
          "audio": ""
        },
        "construct": "costr-f8b432ec-a1dc-45c1-b403-19c020d2d178",
        "shuffle": true,
        "version": 2,
        "microConcept": [
          {
            "id": "micro-3bccd4ab-34fd-4be0-8130-70723251901b",
            "label": "Living in a Family"
          }
        ]
      },
      "stimulus": "<p>Answer the following questions.</p>",
      "options": [],
      "style": {},
      "marks": 3,
      "type": "COMPOSITE"
    },
    "solution": {
      "data": [],
      "answer": [
        {
          "text": "",
          "media": null
        }
      ],
      "step_nav": false,
      "type": "Solution"
    },
    "attachment": "",
    "solutionStrategies": "",
    "style": {
      "extCss": "insidehomelivingroom",
      "qStyle": {
        "bg": ""
      },
      "userInteraction": {
        "styleOpt": "",
        "stylePrint": "print vertical Theme1 composite instructions_hide",
        "stylePreview": "BigIdea Theme1 composite instructions_hide",
        "styleReview": "showTick instantFeedback showFeedback BigIdea Theme1 composite instructions_hide",
        "styleAttempt": "BigIdea Theme1 composite instructions_hide"
      },
      "evtCss": [
        {
          "onOptClick": {
            "actions": [
              {
                "data": "instantFeedback",
                "type": "applyClass",
                "value": "styleAttempt"
              },
              {
                "data": "validMarker",
                "type": "applyClass",
                "value": "styleOpt"
              },
              {
                "data": "themeFb",
                "type": "applyClass",
                "value": "styleAttempt"
              }
            ]
          }
        }
      ]
    }
  },
  {
    "instructions": "",
    "questionID": 0,
    "data": {
      "stimulus_media": null,
      "metadata": {
        "duration": 60,
        "difficulty": "Easy",
        "distractor_rationale": {
          "label": "Incorrect feedback",
          "audio": ""
        },
        "bloom": "Recall",
        "acknowledgements": {
          "label": "Correct feedback",
          "audio": ""
        },
        "construct": "costr-f8b432ec-a1dc-45c1-b403-19c020d2d178",
        "shuffle": true,
        "version": 2,
        "microConcept": [
          {
            "id": "micro-3bccd4ab-34fd-4be0-8130-70723251901b",
            "label": "Living in a Family"
          }
        ]
      },
      "stimulus": "<p>What do we learn from our family?</p>",
      "options": [
        {
          "feedback": [
            {
              "text": "",
              "media": null
            }
          ],
          "score": 0,
          "label": "<p>Hearing</p>",
          "media": "qbimg-f5898b60-1481-4b3d-b71d-600dfda44f9d.png",
          "value": 0,
          "isCorrect": 0
        },
        {
          "feedback": [
            {
              "text": "",
              "media": null
            }
          ],
          "score": 1,
          "label": "<p>Walking</p>",
          "media": "qbimg-e45f1ad6-9c9d-4edc-9698-ec8f32e86aad.png",
          "value": 1,
          "isCorrect": 1
        }
      ],
      "style": {},
      "marks": 1,
      "type": "SCQ"
    },
    "solution": "",
    "style": {
      "extCss": "insidehomelivingroom",
      "qStyle": {
        "bg": ""
      },
      "userInteraction": {
        "styleOpt": "",
        "stylePrint": "print vertical Theme1 scq",
        "stylePreview": "BigIdea Theme1 scq",
        "styleReview": "showTick instantFeedback showFeedback BigIdea Theme1 scq",
        "styleAttempt": "BigIdea Theme1 scq"
      },
      "evtCss": [
        {
          "onOptClick": {
            "actions": [
              {
                "data": "instantFeedback",
                "type": "applyClass",
                "value": "styleAttempt"
              },
              {
                "data": "validMarker",
                "type": "applyClass",
                "value": "styleOpt"
              },
              {
                "data": "themeFb",
                "type": "applyClass",
                "value": "styleAttempt"
              }
            ]
          }
        }
      ]
    }
  },
  {
    "instructions": "",
    "questionID": 0,
    "data": {
      "stimulus_media": null,
      "metadata": {
        "duration": 60,
        "difficulty": "Easy",
        "distractor_rationale": {
          "label": "Incorrect feedback",
          "audio": ""
        },
        "bloom": "Recall",
        "acknowledgements": {
          "label": "Correct feedback",
          "audio": ""
        },
        "construct": "costr-f8b432ec-a1dc-45c1-b403-19c020d2d178",
        "shuffle": true,
        "version": 2,
        "microConcept": [
          {
            "id": "micro-3bccd4ab-34fd-4be0-8130-70723251901b",
            "label": "Living in a Family"
          }
        ]
      },
      "stimulus": "<p>Which of these is a nuclear family?</p>",
      "options": [
        {
          "feedback": [
            {
              "text": "",
              "media": null
            }
          ],
          "score": 1,
          "label": "<p>Small family with parents</p>",
          "media": "qbimg-c0fb9477-24d9-4c99-9ef6-741a02d07b70.png",
          "value": 2,
          "isCorrect": 1
        },
        {
          "feedback": [
            {
              "text": "",
              "media": null
            }
          ],
          "score": 0,
          "label": "<p>Large family</p>",
          "media": "qbimg-84f58dd0-5c97-4c3d-942e-b6059b5f7496.png",
          "value": 3,
          "isCorrect": 0
        }
      ],
      "style": {},
      "marks": 1,
      "type": "SCQ"
    },
    "solution": "",
    "style": {
      "extCss": "insidehomelivingroom",
      "qStyle": {
        "bg": ""
      },
      "userInteraction": {
        "styleOpt": "",
        "stylePrint": "print vertical Theme1 scq",
        "stylePreview": "BigIdea Theme1 scq",
        "styleReview": "showTick instantFeedback showFeedback BigIdea Theme1 scq",
        "styleAttempt": "BigIdea Theme1 scq"
      },
      "evtCss": [
        {
          "onOptClick": {
            "actions": [
              {
                "data": "instantFeedback",
                "type": "applyClass",
                "value": "styleAttempt"
              },
              {
                "data": "validMarker",
                "type": "applyClass",
                "value": "styleOpt"
              },
              {
                "data": "themeFb",
                "type": "applyClass",
                "value": "styleAttempt"
              }
            ]
          }
        }
      ]
    }
  },
  {
    "instructions": "",
    "questionID": 0,
    "data": {
      "stimulus_media": null,
      "metadata": {
        "duration": 60,
        "difficulty": "Easy",
        "distractor_rationale": {
          "label": "Incorrect feedback",
          "audio": ""
        },
        "bloom": "Recall",
        "acknowledgements": {
          "label": "Correct feedback",
          "audio": ""
        },
        "construct": "costr-f8b432ec-a1dc-45c1-b403-19c020d2d178",
        "shuffle": true,
        "version": 2,
        "microConcept": [
          {
            "id": "micro-3bccd4ab-34fd-4be0-8130-70723251901b",
            "label": "Living in a Family"
          }
        ]
      },
      "stimulus": "<p>Who is a family member?</p>",
      "options": [
        {
          "feedback": [
            {
              "text": "",
              "media": null
            }
          ],
          "score": 1,
          "label": "<p>Grandparents</p>",
          "media": null,
          "value": 4,
          "isCorrect": 1
        },
        {
          "feedback": [
            {
              "text": "",
              "media": null
            }
          ],
          "score": 0,
          "label": "<p>Neighbours</p>",
          "media": null,
          "value": 5,
          "isCorrect": 0
        },
        {
          "feedback": [
            {
              "text": "",
              "media": null
            }
          ],
          "score": 0,
          "label": "<p>Friends</p>",
          "media": null,
          "value": 6,
          "isCorrect": 0
        },
        {
          "feedback": [
            {
              "text": "",
              "media": null
            }
          ],
          "score": 0,
          "label": "<p>Classmates</p>",
          "media": null,
          "value": 7,
          "isCorrect": 0
        }
      ],
      "style": {},
      "marks": 1,
      "type": "SCQ"
    },
    "solution": "",
    "style": {
      "extCss": "insidehomelivingroom",
      "qStyle": {
        "bg": ""
      },
      "userInteraction": {
        "styleOpt": "",
        "stylePrint": "print vertical Theme1 scq",
        "stylePreview": "BigIdea Theme1 scq",
        "styleReview": "showTick instantFeedback showFeedback BigIdea Theme1 scq",
        "styleAttempt": "BigIdea Theme1 scq"
      },
      "evtCss": [
        {
          "onOptClick": {
            "actions": [
              {
                "data": "instantFeedback",
                "type": "applyClass",
                "value": "styleAttempt"
              },
              {
                "data": "validMarker",
                "type": "applyClass",
                "value": "styleOpt"
              },
              {
                "data": "themeFb",
                "type": "applyClass",
                "value": "styleAttempt"
              }
            ]
          }
        }
      ]
    }
  }
];

let bigIdeaSubResource = {
  data: bigIdeaQuiz,
  state:{
    "event": "onOptClick",
    "attemptedOption": [
    ],
    "qState": false,
    "attemptCount": 0,
    "pending": 0,
    "confidence": 0.25
  },
  resourceType: 'quiz',
  "subResourceId": "tqqb-6b7aec72-c864-494f-8faf-1a01954e770e",
  "tqId": "tq-5f5d162c-34b8-4d6b-bfda-31933dc9a384"
}

let messageRule = {
  "messages":[
    {"msg":"That’s right.","key":"c_1"},
    {"msg":"You’ve got it!","key":"c_2"},
    {"msg":"Perfect!","key":"c_3"},
    {"msg":"Oops! You missed this.","key":"m_1"},
    {"msg":"Not quite right.","key":"w_1"},
    {"msg":"Are you sure?","key":"w_2"},
    {"msg":"Uh-oh! Give it another shot!","key":"q_w_retry1"},
    {"msg":"Are you sure? Read the options carefully.","key":"q_w_retry2"},
    {"msg":"Not quite. Let's continue.","key":"q_w1" }   ,
    {"msg":"Uh-oh, wrong again! Let's continue.","key":"q_w_multi"},
    {"msg":"You're close! Try again.","key":"q_partial_retry1"},
    {"msg":"Almost right! Take another look (at the question).","key":"q_partial_retry2"},
    {"msg":"Great job! Let's continue.","key":"q_c1"},
    {"msg":"Good going.","key":"q_c2"},
    {"msg":"Spot on!","key":"q_c3"},
    {"msg":"Incorrect","key":"q_w_test"},
    {"msg":"Partially Correct","key":"q_partial_test"},
    {"msg":"Correct","key":"q_c_test"},
    {"msg":"Missed","key":"Q_missed_test"},
    {"msg":"Here you go. Now let's continue.","key":"i_dont_know"}
    ]
  }

function loadData(){
  passQuizDataFromNativeJson(
    scqSubResource,
      mode,
      'practice_player'
  )
}

function resetData(){
  resetQuizFromNative()
}

function validateData(){
  validateQuizFromNative()
}

function nextSubQData(){
  nextSubQuizFromNative()
}

function dummyMethod(){
  console.log('in dummyMethod', practisePlayerRule)
}
