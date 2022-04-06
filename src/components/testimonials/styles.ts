import styled from "styled-components";

export const TestimonialsContainer =  styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  align-items: center;
  font-family: var(--font-family-subtitle);
  h2 {
    text-align: left;
    padding: 2rem;
  }

  p {
    font-weight: 300;
  }

  .container {
    display: flex;

    .testimonial {
      min-width: 280px;
      max-width: 500px;
      padding: 1em;
      text-align: left;

    
      blockquote {
    
    
        cite {
          display: inline;
          text-align: left;
          font-size: 12px;
          font-style: normal;
    
          > span {
            font-weight: 400;
          }
    
          > span::before{
            content: '-';
            display: inline-flex;
            margin: 0 0.2rem;
          }
        }
      }
    }
  }

  @media (max-width: 900px) {
    .container {
      flex-wrap: wrap;
    }
  }

`;