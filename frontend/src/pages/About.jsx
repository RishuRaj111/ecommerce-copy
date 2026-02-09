import { assets } from "../assets/assets"
import NewsletterBox from "../components/NewsletterBox"
import Title from "../components/Title"

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ea, nam optio rem veritatis vel magnam, consequuntur beatae repudiandae temporibus ad maxime enim ducimus, numquam esse dolores corrupti consequatur nulla?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iusto velit inventore magni at, obcaecati repellat perferendis eius cupiditate laborum libero cumque officiis veritatis dicta odio quidem debitis nam vero.</p>
        <b className="text-gray-800">Our Mission</b>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae rerum nam voluptas quidem reiciendis soluta in assumenda neque pariatur saepe!</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quidem.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quidem.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quidem.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About