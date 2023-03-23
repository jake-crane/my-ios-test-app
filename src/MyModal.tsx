import {
    Button,
    Col,
    Container,
    FormFeedback,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Row
} from "reactstrap";
import { css } from "@emotion/react";

const isIframed = true; //window.parent !== window;

const iframedModalCss = css`
    /* CSS specific to iOS devices */
    @supports (-webkit-touch-callout: none) {
        flex-direction: column;
        justify-content: end;
        height: 100%;
        min-height: calc(100% - 3.5rem);

        .scroll-and-read-hint {
            display: block !important;
        }

        /* Limit the modal height on medium sized devices such as ipads */
        @media screen and (max-width: 820px), screen and (max-height: 820px) {
            .modal-body {
                max-height: 600px;
                background-color: blue;
            }
        }

        /* Limit the modal height on smaller devices such as ihphones */
        @media screen and (max-width: 480px), screen and (max-height: 480px) {
            .modal-body {
                max-height: 400px;
                background-color: red;
            }
        }
    }
`;

interface ComponentProps {
    toggle: () => void;
    achTextAgreement: string | null | undefined;
    agreed?: boolean;
}

const MyModal = ({
    toggle,
    achTextAgreement,
    agreed = false
}: ComponentProps) => {
    // const ssvPrompt = false;
    return (
        <Modal
            isOpen
            size="lg"
            scrollable
            css={isIframed ? iframedModalCss : undefined}
        >
            <ModalHeader toggle={toggle} tag="h4">
                Terms and Conditions
            </ModalHeader>
            <ModalBody>
                <Container>
                    <Row className="mb-2 d-none scroll-and-read-hint">
                        <strong>Please scroll to read and accept the agreement.</strong>
                    </Row>
                    <div dangerouslySetInnerHTML={{ __html: achTextAgreement ?? "" }} />
                    {/* {!agreed && ssvPrompt && (
                  <FormGroup row>
                      <Label xs={6} for="ssvResponse">
                          <strong>
                              {ssvPrompt}
                          </strong>
                      </Label>
                      <Col xs="6">
                          <FormGroup>
                              <Input id="ssvResponse" invalid={!isValidSsvResponse} value={ssvResponse} onChange={handleResponseChange} />
                              {ssvResponseErrMsg && (
                                  <FormFeedback invalid>
                                      {ssvResponseErrMsg}
                                  </FormFeedback>
                              )}
                          </FormGroup>
                      </Col>
                  </FormGroup>
              )} */}
                    {/* {!agreed && (
                  <BootstrapCustomCheckbox
                      checked={agreeCheckValue}
                      onChange={() => setAgreeCheckValue(prev => !prev)}
                      id="terms-and-conditions"
                      label={<FormattedMessage {...achMessages.termsAndConditionsCheckboxLabel} />}
                  />
              )} */}
                </Container>
            </ModalBody>
            <ModalFooter>
                {!agreed && (
                    <Button type="button" className="mr-1" onClick={toggle}>
                        Cancel
                    </Button>
                )}
                <Button type="button" className="mr-1">
                    Print
                </Button>
                {agreed ? (
                    <Button color="primary">Continue</Button>
                ) : (
                    <Button color="primary">Agree</Button>
                )}
            </ModalFooter>
        </Modal>
    );
};

export default MyModal;  