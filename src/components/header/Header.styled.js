import styled from "styled-components";

const StyledHeader = styled.header`
.main-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
}

.main-nav a {
  font-weight: bold;
  color: #2c3e50;
}

.main-nav a.router-link-exact-active {
  color: #42b983;
}

.main-nav-item {
  text-decoration: none;
  border: none;
  background-color: transparent;
  margin-right: 0.5rem;
  font-size: 1rem;
}

.main-nav-item:hover {
  text-decoration: underline;
}

.main-nav-logo {
  display: flex;
  align-items: center;
}

.main-nav-logo-image {
  max-width: 100%;
  width: 200px;
}

.logout-icon {
  vertical-align: top;
  margin-left: 1rem;
}

.profile-btn {
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;

  &:hover {
    text-decoration: underline;
  }
}
`

export default StyledHeader