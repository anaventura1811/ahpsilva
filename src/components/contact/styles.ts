import styled from "styled-components";

export const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-family-subtitle); 
  font-weight: 300;
  color: var(--gray-background-color);

  .container {
    display: flex;
    flex-direction: column;
    max-width: 1200px !important;
    align-items: center;

    > h2 {
      font-weight: 700;
      align-self: flex-start;
      padding: 2rem;
    }

    .title_underline {

    }

    .title_underline::after {
      content: '';
      display: inline-flex;
      width: 16px;
      height: 4px;
      background-color: var(--secondary-font-color);
      margin-left: 0.1rem;
    }


    .text-info {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;

      .subcontainer {
  
        .social-media > h3 {
          text-transform: uppercase;
        }

        .info {
          display: flex;
          flex-direction: column;
          /* align-items: left; */
  
          > a {
          text-decoration: none;
          color: inherit;
          display: flex;
          gap: 0.5rem;
          text-align: left;
          align-items: center;
        }
        }

        .iframe {
          border: none;
          /* width: 100%;
          height: auto; */

        }
  
        #contact-email {
          /* padding: 0 2rem; */
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }

    @media (max-width: 980px) {

      .container {

        .text-info {
  
          .subcontainer {
  
            .iframe {
              margin: 1rem;
              width: 100%;
              height: auto;
              /* width: 600px !important;
              height: 450px !important; */
            }
          }
  
        }
      }

    }
    
  }
`;