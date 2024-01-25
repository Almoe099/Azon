# Welcome To Azon

Check Out the [Live Site](https://azon.onrender.com/)

## Introduction

Azon has been crafted as a sophisticated emulation of a widely embraced and renowned e-commerce platform, drawing inspiration from the success of Amazon. This multinational technology and e-commerce giant offers an extensive range of products and services, spanning online retail, cloud computing, digital streaming, and cutting-edge smart devices. In line with the Amazon experience, Azon empowers users to effortlessly navigate a dynamic homepage teeming with a plethora of product options. Upon clicking, users are seamlessly guided through an immersive journey, allowing them to explore in-depth details about authentic products on their dedicated pages. For anyone accustomed to the convenience of shopping on Amazon, Azon provides a user-friendly interface that simplifies the process of browsing, adding items to the cart, and shopping with unparalleled ease and efficiency. The technologies implemented in this project include:

* Languages: Javascript, Ruby, HTML, and CSS
* Frontend: React-Redux
* Database: PostgreSQL
* Hosting: Render
* Asset Storage: AWS Simple Cloud Storage (S3)

# MVPs

## Nav Bar

Upon entering Azon, users will find themselves on the welcoming splash page adorned with the iconic navigation bar, providing them with easy access to explore the entire site at their convenience. From this starting point, users can seamlessly browse through the various offerings and navigate the platform effortlessly.

<!-- [Nav Bar](Placeholder) -->

```
return (
    <div className="header">
      <div className="headerRow1">
        <Link to={"/"}>
          <img className="logo" src={azonImage} />
        </Link>

        <div className="searchBar">
          <input
            type="text"
            className="inputSearch"
            placeholder="Search Azon"
          />

          <img className="searchIcon" src={SearchIcon} id="search" />
        </div>

        <div className="nav">
          <div className="optionIcon">
            <Link to={"https://github.com/Almoe099"}>
              <img className="icon" src={orangeLinkedin} />
            </Link>
          </div>

          <div className="optionIcon">
            <Link to={"https://github.com/Almoe099"}>
              <img className="icon" src={orangeGithub} />
            </Link>
          </div>

          <div className="option">
            <span className="optionLineOne">
              Hello, {!user ? "sign in" : user.name}
            </span>
            <div className="account-dropDown">
              <span className="optionLineTwo">Accounts & Lists</span>
              <div className="dropdown-content">
                <Link to={user ? "/" : "/login"}>
                  <button
                    type="submit"
                    className="signin-button"
                    onClick={handleSubmit}
                  >
                    {!user ? "Sign in" : "Sign out"}
                  </button>
                </Link>
                <label className="new-customer-label">
                  {!user ? "New customer?" : ""}
                  <Link to={"/signup"}>{!user ? "Start here." : ""}</Link>
                </label>
              </div>
            </div>
          </div>

          <div className="option">
            <span className="optionLineOne">Returns</span>
            <span className="optionLineTwo">& Orders</span>
          </div>

          <div className="optionIcon">
            <Link to={"/cart"}>
              <img className="icon" src={CartIcon} />
            </Link>
            <span className="cartCount">{totalQuantity}</span>
          </div>
        </div>
      </div>

      <div className="headerRow2">
        <div className="categories">
          <div className="optionCategory">Best Sellers</div>
          <div className="optionCategory">New Releases</div>
          <div className="optionCategory">Today&apos;s Deals</div>
          <div className="optionCategory">Prime</div>
        </div>
      </div>
    </div>
);
```

## Sign Up / Sign IN

Users will have the flexibility to effortlessly sign up, log in, and log out of their Azon accounts, providing a seamless experience as they explore the platform. Once logged in, users can engage in a convenient shopping experience, adding desired products to their respective carts with ease.

<!-- [Sign Up](Placeholder) -->

```
return (
    <>
      <Link to={"/"}>
        <img className="azonHome" src={azonHome} />
      </Link>
      <div className="signup-container">
        <h1>Create account</h1>
        <form onSubmit={handleSubmit}>
          {/* <ul> */}
          {errors.map((error) => (
            <li key={error} className="errors">
              {error}
            </li>
          ))}
          {/* </ul> */}

          <label>
            {" "}
            Your name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="First and last name"
            />
          </label>

          <label>
            {" "}
            Email
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            {" "}
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="At least 6 characters"
            />
          </label>

          <label>
            {" "}
            Re-enter password
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>

          <button type="submit">Continue</button>

          <button type="submit" id="demo" onClick={demoLogin}>
            Demo Login
          </button>

          <p className="footerText">
            By creating an account, you agree to Azon&apos;s Conditions of Use
            and Privacy Notice.
          </p>
          <p className="footerLogin">
            Already have an account? <a href="/login">Sign in</a>{" "}
          </p>
        </form>
        <AuthFooter />
      </div>
    </>
);
```

<!-- [Sign In](Placeholder) -->

```
return (
    <div className="login">
      <Link to={"/"}>
        <img className="azonHome" src={azonHome} />
      </Link>

      <div className="login-container">
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit}>
          {errors.map((error) => (
            <li key={error} className="errors">
              {error}
            </li>
          ))}

          <label>
            Email
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input"
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <button type="submit">Continue</button>

          <button type="submit" id="demo" onClick={demoLogin}>
            Demo Login
          </button>

          <p className="footerText">
            By continuing, you agree to Azon&apos;s Conditions of Use and
            Privacy Notice.
          </p>
        </form>
      </div>
      <div className="line">
        <p className="newAccount">New to Azon?</p>
        <Link to={"/signup"}>
          <button className="createButton" type="submit">
            Create your Azon account
          </button>
        </Link>
      </div>
      <AuthFooter />
    </div>
);
```

## Product Index




## Product Show
## Cart






































## CC Licensing:
* <a href="https://www.textstudio.com/">Font generator</a>

* <a href="https://www.flaticon.com/free-icons/shopping-cart" title="shopping cart icons">Shopping cart icons created by HideMaru - Flaticon</a>

* <a href="https://www.textstudio.com/">Font generator</a>

* <a target="_blank" href="https://icons8.com/icon/85180/shopping-cart">Cart</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

* <a target="_blank" href="https://icons8.com/icon/64154/linkedin">LinkedIn</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

* <a target="_blank" href="https://icons8.com/icon/118557/github">GitHub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

* <a target="_blank" href="https://icons8.com/icon/NTCUeTIie8CC/linkedin">LinkedIn</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

* <a target="_blank" href="https://icons8.com/icon/E2KVOMc77Geo/github">GitHub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>