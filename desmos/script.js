var elt = document.getElementById('calculator');
var calculator = Desmos.GraphingCalculator(elt, {expressions: true, actions: true});
var example = document.getElementById('example')
var text = document.getElementById('text')
var color = document.getElementById('color')
var c = Desmos.GraphingCalculator(example)
console.log(c.getState())
c.setState(JSON.stringify(c.getState()))
start  = {
    "version": 11,
    "randomSeed": "2e203cfeeed306ada1ac9d6e8280cf70",
    "graph": {
      "viewport": {
        "xmin": -96.22429214796745,
        "ymin": -37.026111324344356,
        "xmax": 191.84920138995443,
        "ymax": 323.0657555980527
      }
    },
    "expressions": {
      "list": [
        {
          "type": "expression",
          "id": "2",
          "color": "#2d70b3",
          "latex": "a=0",
          "hidden": true,
          "slider": {
            "min": "-69"
          }
        },
        {
          "type": "expression",
          "id": "3",
          "color": "#388c46",
          "latex": "b=0",
          "hidden": true,
          "slider": {
            "min": "-33",
            "max": "87.6"
          }
        },
        {
          "type": "expression",
          "id": "5",
          "color": "#000000",
          "latex": "\\left(a,b\\right)",
          "showLabel": true,
          "label": "click",
          "dragMode": "NONE",
          "clickableInfo": {
            "enabled": true,
            "latex": "x_{points}\\to j_{oin}\\left(x_{points},\\ x_{point}\\right),\\ y_{points}\\to j_{oin}\\left(y_{points},\\ y_{point}\\right)"
          }
        },
        {
          "type": "expression",
          "id": "6",
          "color": "#c74440",
          "latex": "\\left(a,\\ b\\right)"
        },
        {
          "type": "expression",
          "id": "9",
          "color": "#6042a6",
          "latex": "\\left(a,\\ b\\right)",
          "showLabel": true,
          "label": "new",
          "dragMode": "NONE",
          "clickableInfo": {
            "enabled": true,
            "latex": "s_{hapes}\\to j_{oin}\\left(s_{hape},\\ s_{hapes}\\right),\\ x_{points}\\to\\left[\\right],\\ y_{points}\\to\\left[\\right]"
          }
        },
        {
          "type": "expression",
          "id": "7",
          "color": "#2d70b3",
          "latex": "c=0"
        },
        {
          "type": "expression",
          "id": "8",
          "color": "#388c46",
          "latex": "x_{points}=\\left[\\right]"
        },
        {
          "type": "expression",
          "id": "10",
          "color": "#000000",
          "latex": "y_{points}=\\left[\\right]"
        },
        {
          "type": "expression",
          "id": "11",
          "color": "#c74440",
          "latex": "x_{point}\\ =\\ \\left[a\\right]"
        },
        {
          "type": "expression",
          "id": "12",
          "color": "#2d70b3",
          "latex": "y_{point}\\ =\\ \\left[b\\right]"
        },
        {
          "type": "expression",
          "id": "13",
          "color": "#388c46",
          "latex": "j_{oin}\\left(x,\\ y\\right)\\ =\\ \\operatorname{join}\\left(x,\\ y\\right)"
        },
        {
          "type": "expression",
          "id": "14",
          "color": "#6042a6",
          "latex": "r_{eset}\\left(x\\right)\\ =\\ x_{points}\\to\\left[\\right],\\ y_{points}\\to\\left[\\right],\\ s_{hapes}\\to\\left[\\right],\\ a\\to0,\\ b\\to0"
        },
        {
          "type": "expression",
          "id": "15",
          "color": "#000000",
          "latex": "\\left(x_{points},\\ y_{points}\\right)"
        },
        {
          "type": "expression",
          "id": "16",
          "color": `${color.value}`,
          "latex": "s_{hape}=\\left[\\operatorname{polygon}\\left(x_{points},\\ y_{points}\\right)\\right]"
        },
        {
          "type": "expression",
          "id": "17",
          "color": "#2d70b3",
          "latex": "s_{hapes}=\\left[\\right]"
        }
      ]
    }
  }
//calculator.setDefaultState(JSON.parse(start))
calculator.setState(start)


calculator.observeEvent('change', (name, event) => {
  if (event.isUserInitiated) {
    var state = calculator.getState()
    //text.textContent = JSON.stringify(state)
    //console.log(state)
   // websocket.send(JSON.stringify(state))
  }
})
calculator.observeEvent('change.selectedExpressions', function() {
    var selected = calculator.getSelectedExpressionId();
    if (selected == '9') {
        alert('Expression y=x^2 clicked!');
    }
});
color.addEventListener('change', () => {
  console.log(color.value)
  console.log(calculator.getExpressions().length+5)
  calculator.setExpression({id:16, color: color.value})
  
})