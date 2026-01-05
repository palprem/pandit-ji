import Button from '@/components/button'
import {Title} from '@/components/typography/title'
import Streper from '@/components/image/streper'
import Input from '@/components/input'
import { faTex } from '@fortawesome/free-brands-svg-icons'
import { faLock, faPhone, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import WellcomeContent from '../home/wellcomeContent'
import FormWrapper from '@/wrapper/formWrapper'

function ContectUs() {
  return (
    <>
      <Streper title='Contact Us' />
      <FormWrapper>
        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 card shadow py-4">

          <Title>Contact Information</Title>

          <form className="mx-1 mx-md-4 ">

            <div className="d-flex flex-row align-items-center mb-4">
              <FontAwesomeIcon className='fs-3 user-icon' icon={faUserTie} />
              <div data-mdb-input-init className="form-outline flex-fill mb-0">
                <Input
                  required
                  // onChange={(e) => handleChange(e)}
                  // value={formData.email_id}
                  label='Full Name'
                  type='text'
                  name='email_id'
                />
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <FontAwesomeIcon className='fs-3 user-icon' icon={faPhone} />
              <div data-mdb-input-init className="form-outline flex-fill mb-0">
                <div data-mdb-input-init className="form-outline flex-fill mb-0">
                  <Input
                    required
                    // onChange={(e) => handleChange(e)}
                    // value={formData.password}
                    label='Contect Number'
                    name='password'
                    type='tel'
                  />
                </div>
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <FontAwesomeIcon className='fs-3 user-icon' icon={faTex} />
              <div data-mdb-input-init className="form-outline flex-fill mb-0">
                <div data-mdb-input-init className="form-outline flex-fill mb-0">
                  <strong className="form-label" >Tell us what you want to talk about</strong>

                  <textarea
                    className='form-control'
                    required
                    // onChange={(e) => handleChange(e)}
                    // value={formData.password}
                    name='password'
                    type='tel'
                  />
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
              <Button
                // loading={loading}
                type='submit'
                label='Submit'
                className='btn btn-warning w-100'
              />
            </div>

          </form>

        </div>
        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
          <WellcomeContent />
        </div>
      </FormWrapper>
    </>
  )
}

export default ContectUs