import CardWrapper from '@/components/card/card-wrapper'
import ContainerWapper from '@/components/card/container-wapper'
import RowWrapper from '@/components/card/row-wrapper'
import Image from '@/components/image'
import VastuStreper from '@/components/image/vastuStreper'
import CardTitle from '@/components/typography/cardTitle'
import MutedText from '@/components/typography/mutedText'
import React from 'react'

function CommercialVastu() {
    return (
        <>
            <VastuStreper title='Commercial Vastu' />
            <CardWrapper>
                <ContainerWapper>

                    <RowWrapper>
                        <Image
                            alt='vastu/commercial/page'
                            src='https://secretvastu.com/extra_images/ZvdrEAN9_North_West_Kitchen_Vastu.png'
                        />

                        <div className="card-body my-5">

                            <MutedText>
                                According to the architectural science of Vastu Shastra, there is a deep connection between the environment of a workplace and the over-all success of a business. It is scientifically proven that having a positive work environment can actually increase the productivity in a workplace. Different design aspects, walls of your workplace, whole interior and layout will provoke different psychological responses. So, it becomes important to have a Vastu-Friendly office.

                                The American Psychological Association estimates that approximately $550 billion is siphoned off from the U.S. economy annually due to workplace stress, reduced performance and unmotivated employees. It clearly shows that mental health problems have a negative impact on the productivity and profits of businesses. And a Vastu compliant office helps in maintaining one’s mental as well as physical health.

                                In modern times, even big organizations are using environmental psychology in their office designs to foster a productive and communicative atmosphere.

                                Large companies have separate departments- such as accounting, marketing, sales, finance, etc. They all require separate spaces for their proper working. And according to the rules stated in vastu shastra, every department provides best results when they are located in their related vastu zones. Because certain vastu zones are considered to give better results for certain tasks.
                            </MutedText>


                            <CardTitle>These are the seven key reasons why creating a Vastu-Friendly office environment is beneficial for your business: </CardTitle>


                            <MutedText>
                                1- It enhances work performance of employees

                                2- Quick recovery from financial losses

                                3- Attracts new and better opportunities to grow your business

                                4- Controlled wasteful expenditures and improved savings

                                5- Increases your business related skills

                                6- Helps you get more orders and sales

                                7- Removes the obstacles in success
                            </MutedText>
                        </div>
                    </RowWrapper>
                </ContainerWapper>
            </CardWrapper>
        </>
    )
}

export default CommercialVastu