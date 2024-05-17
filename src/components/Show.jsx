import React, { useEffect } from 'react';
import './Show.css';

const Show = () => {

  useEffect(() => {
    filterSelection("all");

    // Add active class to the current button (highlight it)
    var btnContainer = document.getElementById("myBtnContainer");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
      });
    }
  }, []);

  const filterSelection = (c) => {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c === "all") c = "";
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }

  const w3AddClass = (element, name) => {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) === -1) { element.className += " " + arr2[i]; }
    }
  }

  const w3RemoveClass = (element, name) => {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

  return (
    <div className="main">
      <hr />
      <div id="myBtnContainer">
        <button className="btn active" onClick={() => filterSelection('all')}> Show all</button>
        <button className="btn" onClick={() => filterSelection('nature')}>Developers</button>
        <button className="btn" onClick={() => filterSelection('cars')}>Mentors</button>
        <button className="btn" onClick={() => filterSelection('people')}>people</button>
      </div>
      <div className="row">
        <div className="column nature">
          <div className="content">
          <img
        src="https://media.licdn.com/dms/image/D5603AQE_5SO4INZ5Ww/profile-displayphoto-shrink_800_800/0/1715949209165?e=1721260800&v=beta&t=_ZBl-dZJHPYcjW-tQ12VbqMWjdx8oUEfPR89Pj1iAfI"
        alt="Mountains"
        style={{ width: '100%', height: '300px', objectFit: 'cover' }}
      />
            <h4>Yamini</h4>
            <p>fullstack developer & cp entusiastic3</p>
          </div>
        </div>
        <div className="column nature">
          <div className="content">
            <img src="https://media.licdn.com/dms/image/D5603AQHla5G1SeF-QQ/profile-displayphoto-shrink_200_200/0/1713357899944?e=1721260800&v=beta&t=3nEyQTgTcf1jlh0GE48NXkh7mSLC4vGFu3aIPS7-8Q4" alt="Lights"         style={{ width: '100%', height: '300px', objectFit: 'cover' }}
 />
            <h4>Anamika</h4>
            <p>full stack developer </p>
          </div>
        </div>
        <div className="column nature">
          <div className="content">
          <img src="https://media.licdn.com/dms/image/D5603AQE_5SO4INZ5Ww/profile-displayphoto-shrink_800_800/0/1715949209165?e=1721260800&v=beta&t=_ZBl-dZJHPYcjW-tQ12VbqMWjdx8oUEfPR89Pj1iAfI" alt="Mountains"         style={{ width: '100%', height: '300px', objectFit: 'cover' }}
 />
            <h4>Vishal</h4>
            <p>fullstack developer & cp entusiastic</p>
          </div>
        </div>
        <div className="column cars">
          <div className="content">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC7mnnJg4VD9Dk14hdGj4AMdyPtzV-LTM35g&s" alt="Car" 
                    style={{ width: '100%', height: '300px', objectFit: 'cover' }}

          />
            <h4>mishra</h4>
            <p>Specialist</p>
          </div>
        </div>
        <div className="column cars">
          <div className="content">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUOoJuWwfINdHUCbO28WgHqreqpJLgsYDd-A&s" alt="Car"         style={{ width: '100%', height: '300px', objectFit: 'cover' }}
 />
            <h4>swapna</h4>
            <p>sr mentor</p>
          </div>
        </div>
        <div className="column cars">
          <div className="content">
            <img src="https://media.licdn.com/dms/image/D5603AQGFDztnvzPy2A/profile-displayphoto-shrink_800_800/0/1711220930146?e=1721260800&v=beta&t=lW49-qy0OQs27zrOiKMSzuNwTNag8uwj6qIf1ov-72g" alt="Car"         style={{ width: '100%', height: '300px', objectFit: 'cover' }}
 />
            <h4>Ananya</h4>
            <p>Junior mentor</p>

          </div>
        </div>
        <div className="column people">
          <div className="content">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROD23RMSguUxXwsAjm_QenZoFmsqJfNySM89iQ5Og4qXvNi9AE3zkJ8TdMAWGxh3-n_9Q&usqp=CAU" alt="Car"         style={{ width: '100%', height: '300px', objectFit: 'cover' }}
 />
            <h4>Vedaamsh</h4>
            <p>Specialist</p>
          </div>
        </div>
        <div className="column people">
          <div className="content">
            <img src="data:image/jpeg;base64,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" alt="Car"         style={{ width: '100%', height: '300px', objectFit: 'cover' }}
/>
            <h4>Man</h4>
            <p>Lorem ipsum dolor..</p>
          </div>
        </div>
        <div className="column people">
          <div className="content">
            <img src="https://media.licdn.com/dms/image/D5603AQFP79lVT3WRZQ/profile-displayphoto-shrink_800_800/0/1703391282635?e=1721260800&v=beta&t=9U28Uzi2rMR1dVRqXISxcP0s7mqEKoer8NoHftdnOeI" alt="yamms"         style={{ width: '100%', height: '300px', objectFit: 'cover' }}
 />
            <h4>ammu</h4>
            <p>Lorem ipsum dolor..</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Show;