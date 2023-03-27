import {
    Button,
    Container,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Row
} from "reactstrap";
import { useState } from "react";

const isIframed = true; //window.parent !== window;

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
    const [useFix, setUseFix] = useState(true)
    // const ssvPrompt = false;
    return (
        <Modal
            isOpen
            size="lg"
            scrollable
            className={(useFix && isIframed) ? 'iframed-modal' : undefined}
        >
            <ModalHeader toggle={toggle} tag="h4">
                Terms and Conditions
            </ModalHeader>
            <ModalBody>
                <Container>
                    <Row className="mb-2 d-none scroll-and-read-hint">
                        <strong>Please scroll to read and accept the agreement.</strong>
                    </Row>
                    <div className="row" dangerouslySetInnerHTML={{ __html: achTextAgreement ?? "" }} />
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
                <Button color="primary" onClick={() => setUseFix(prev => !prev)}>Toggle Fix</Button>
            </ModalFooter>
        </Modal>
    );
};

export default MyModal;  