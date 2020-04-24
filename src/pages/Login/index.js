import React, { Component } from "react";
//import { Link } from "react-router-dom";

import { Container, Img, Sidebar, Google, Form, Links, Input } from "./styles";

import Logo from "../../assets/logo.png";

class Login extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: "",
  };

  handleLogin = (e) => {
    e.preventDefault();
    alert("Eu vou te registrar");
  };

  render() {
    return (
      <Container>
        <Img>
          <img src={Logo} alt="HSP logo" />
          <br />
          <br />
          <p>
            O portal trará o conjunto de seus aplicativos, comunicados e os
            aplicativos Google de forma robusta, integrada e segura, facilitando
            seu dia.
          </p>
        </Img>
        <Sidebar>
          <Google>
            <button> Entre com o Google </button>
          </Google>
          <br />
          <p>OU</p>
          <Form onSubmit={this.handleSignUp}>
            {this.state.error && <p>{this.state.error}</p>}

            <h6>Faça login com sua conta Intranet / SGH</h6>

            <Input
              type="text"
              placeholder="Usuário*"
              onChange={(e) => this.setState({ username: e.target.value })}
            />
            <br />
            <br />
            <Input
              type="password"
              placeholder="Senha*"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <br />
            <Links>
            <a href="https://intranet.unifesp.br/cadastro.php" target="_blank" rel="noopener noreferrer">
              Cadastre-se
            </a>
            <a href="http://hospitalsaopaulo.org.br/sgh/sish/auth/forgotpassword" target="_blank" rel="noopener noreferrer">
              Esqueci minha senha
            </a>
            </Links>
            <br />
            <button type="submit">ENTRAR</button>
            <hr />
            <span>
              Em caso de dúvidas, entre em contato com a Central de Serviços em
              TI - Departamento de Tecnologia da Informação (CSTI-DTI) através
              do telefone <b>(11) 5089-9222</b> ou <a href="https://docs.google.com/forms/d/e/1FAIpQLSc802FZRBnwFnKRVLiWuWYJsht6D3nkednKWZm1gMsmhaz2zQ/viewform" target="_blank" rel="noopener noreferrer">Clique aqui</a> para utilizar o
              suporte online.
            </span>
          </Form>
        </Sidebar>
      </Container>
    );
  }
}

export default Login;
