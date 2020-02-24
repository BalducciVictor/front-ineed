import React, { useState } from 'react'
import FiltreButton from '../Buttons/FiltreButton'
import InputSelect from '../InputSelect'

const Filtre = ({ props }) => {
  const [buttonAll, setButtonAll] = useState({
    state: false
  })

  const [buttonHospital, setButtonHospital] = useState({
    state: false
  })

  const [buttonPharmacies, setButtonPharmacies] = useState({
    state: false
  })
  const [CentreValue, setCentreValue] = useState('')

  return (
    <div className="box__filtre">
      <p className="instruction">What can we help you find ?</p>
      <div className="fitres">
        <FiltreButton
          toogle={setButtonAll}
          template="All" active={ buttonAll.state }
        />
        <FiltreButton
          toogle={setButtonHospital}
          template="Hospitals" active={ buttonHospital.state }
        />
        <FiltreButton
          toogle={setButtonPharmacies}
          template="Pharmacies 24/24" active={ buttonPharmacies.state }
        />
        <InputSelect
          placeHolder="Health centres"
          setValue={setCentreValue}
          value={CentreValue}
          values={
            ['sunt aut facere repellat provident occaecati excepturi optio reprehenderit', 'qui est esse', 'ea molestias quasi exercitationem repellat qui ipsa sit aut', 'eum et est occaecati', 'nesciunt quas odio', 'dolorem eum magni eos aperiam quia', 'magnam facilis autem', 'dolorem dolore est ipsam', 'nesciunt iure omnis dolorem tempora et accusantium', 'optio molestias id quia eum', 'et ea vero quia laudantium autem', 'in quibusdam tempore odit est dolorem', 'dolorum ut in voluptas mollitia et saepe quo animi', 'voluptatem eligendi optio', 'eveniet quod temporibus', 'sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio', 'fugit voluptas sed molestias voluptatem provident', 'voluptate et itaque vero tempora molestiae', 'adipisci placeat illum aut reiciendis qui', 'doloribus ad provident suscipit at', 'asperiores ea ipsam voluptatibus modi minima quia sint', 'dolor sint quo a velit explicabo quia nam', 'maxime id vitae nihil numquam', 'autem hic labore sunt dolores incidunt', 'rem alias distinctio quo quis', 'est et quae odit qui non', 'quasi id et eos tenetur aut quo autem', 'delectus ullam et corporis nulla voluptas sequi', 'iusto eius quod necessitatibus culpa ea', 'a quo magni similique perferendis', 'ullam ut quidem id aut vel consequuntur', 'doloremque illum aliquid sunt', 'qui explicabo molestiae dolorem', 'magnam ut rerum iure', 'id nihil consequatur molestias animi provident', 'fuga nam accusamus voluptas reiciendis itaque', 'provident vel ut sit ratione est', 'explicabo et eos deleniti nostrum ab id repellendus', 'eos dolorem iste accusantium est eaque quam', 'enim quo cumque', 'non est facere', 'commodi ullam sint et excepturi error explicabo praesentium voluptas', 'eligendi iste nostrum consequuntur adipisci praesentium sit beatae perferendis', 'optio dolor molestias sit', 'ut numquam possimus omnis eius suscipit laudantium iure', 'aut quo modi neque nostrum ducimus', 'quibusdam cumque rem aut deserunt', 'ut voluptatem illum ea doloribus itaque eos', 'laborum non sunt aut ut assumenda perspiciatis voluptas', 'repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem', 'soluta aliquam aperiam consequatur illo quis voluptas', 'qui enim et consequuntur quia animi quis voluptate quibusdam', 'ut quo aut ducimus alias', 'sit asperiores ipsam eveniet odio non quia', 'sit vel voluptatem et non libero', 'qui et at rerum necessitatibus', 'sed ab est est', 'voluptatum itaque dolores nisi et quasi', 'qui commodi dolor at maiores et quis id accusantium', 'consequatur placeat omnis quisquam quia reprehenderit fugit veritatis facere', 'voluptatem doloribus consectetur est ut ducimus', 'beatae enim quia vel', 'voluptas blanditiis repellendus animi ducimus error sapiente et suscipit', 'et fugit quas eum in in aperiam quod', 'consequatur id enim sunt et et', 'repudiandae ea animi iusto', 'aliquid eos sed fuga est maxime repellendus', 'odio quis facere architecto reiciendis optio', 'fugiat quod pariatur odit minima', 'voluptatem laborum magni', 'et iusto veniam et illum aut fuga', 'sint hic doloribus consequatur eos non id', 'consequuntur deleniti eos quia temporibus ab aliquid at', 'enim unde ratione doloribus quas enim ut sit sapiente', 'dignissimos eum dolor ut enim et delectus in', 'doloremque officiis ad et non perferendis', 'necessitatibus quasi exercitationem odio', 'quam voluptatibus rerum veritatis', 'pariatur consequatur quia magnam autem omnis non amet', 'labore in ex et explicabo corporis aut quas', 'tempora rem veritatis voluptas quo dolores vero', 'laudantium voluptate suscipit sunt enim enim', 'odit et voluptates doloribus alias odio et', 'optio ipsam molestias necessitatibus occaecati facilis veritatis dolores aut', 'dolore veritatis porro provident adipisci blanditiis et sunt', 'placeat quia et porro iste', 'nostrum quis quasi placeat', 'sapiente omnis fugit eos', 'sint soluta et vel magnam aut ut sed qui', 'ad iusto omnis odit dolor voluptatibus', 'aut amet sed', 'ratione ex tenetur perferendis', 'beatae soluta recusandae', 'qui qui voluptates illo iste minima', 'id minus libero illum nam ad officiis', 'quaerat velit veniam amet cupiditate aut numquam ut sequi', 'quas fugiat ut perspiciatis vero provident', 'laboriosam dolor voluptates', 'temporibus sit alias delectus eligendi possimus magni', 'at nam consequatur ea labore ea harum']
          }
        />
      </div>
    </div>
  )
}

export default Filtre
