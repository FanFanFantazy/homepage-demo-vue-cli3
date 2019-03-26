<template lang="pug">
el-row
  el-row
    h3.left RELEVANT SKILLS
  hr.hrSt
  el-row
    el-row(v-for="(item, index) in list", style="line-height:30px; text-align:left; margin-bottom:10px", :key="index")
      span.labelStyle {{`${item.label}: `}}
      br
      el-row
        el-col(style="font-size:14px; font-style: italic;", v-for="(item2, index2) in item.content", :key="index2" :span="12")
          el-popover(placement="left-start", trigger="click" v-if="item2.content")
            el-row(style="max-width:300px")
              el-col(:span="11")
                img(style="width:130px; cursor:pointer", :src="item2.img", @click="jumpToPage(item2.content)")
              el-col(:span="13")
                span(style="font-size:10px;") {{item2.abstract}}
            el-button.buttonStyle(size="normal", slot="reference") {{item2.label}}
          el-button.buttonStyle(size="normal", v-else) {{item2.label}}

</template>
<script>
export default {
  data () {
    return {
      list: [
        { label: 'Languages',
          content: [
            { label: 'Native speaker of Mandarin; ' },
            { label: 'Proficient in English. ' }
          ]
        },
        { label: 'Coding Skills',
          content: [
            { label: 'VUE, ' },
            { label: 'JavaScript, ' },
            { label: 'HTML, ' },
            { label: 'C++/C, ' },
            { label: 'MATLAB, ' },
            { label: 'Python.' }
          ]
        },
        { label: 'Management Tools',
          content: [
            { label: 'Git, ' },
            { label: 'Gitea, ' },
            { label: 'SVN, ' },
            { label: 'JIRA.' }
          ]
        },
        { label: 'IBM Badges',
          content: [
            { label: 'Enterprise Design Thinking Co-Creator, ',
              content: 'https://www.youracclaim.com/badges/b535baa1-009f-4f85-a6aa-3386d26a4ded/linked_in_profile',
              img: 'https://images.youracclaim.com/images/2700b813-82b8-4232-9b36-5dcd5cd24584/Badges_v8-08%2BCo-Creator.png',
              abstract: 'As a Co-Creator, the badge earner is an active contributor on Enterprise Design Thinking engagements. They help bring real-world user outcomes to life by growing collaboration skills and finding opportunities to step up and lead.'
            },
            { label: 'IBM Automation Practitioner, ',
              content: 'https://www.youracclaim.com/badges/cf9a12ee-ae09-4411-9e5d-0e1ce293a290/linked_in_profile',
              img: 'https://images.youracclaim.com/images/fcb1caa4-70b6-4571-aaf5-befb0c0b19ff/Automation%2BPractitioner.png',
              abstract: 'IBM Automation helps our clients embrace automation technology to deliver better, faster, more securely and with higher quality. We enable clients to create superior customer experiences, control costs, and pursue new revenue models by leveraging intelligent, enterprise-wide automation.'
            },
            { label: 'Insurance Industry Foundations, ',
              content: 'https://www.youracclaim.com/badges/55a7341c-c5e5-43d3-a830-f94ec6a4134d/linked_in_profile',
              img: 'https://images.youracclaim.com/images/4e9e1434-abf2-47bc-af6c-55acbfa70bac/industry%2Bprogram%2Bbadges_Insurance.png',
              abstract: 'Insurance Industry Foundations badge is awarded for successful completion of the Insurance Industry Jumpstart program'
            },
            { label: 'Enterprise Design Thinking Practitioner.',
              content: 'https://www.youracclaim.com/badges/696a1727-36bb-4a44-bf8f-fe6ff69de79b/linked_in_profile',
              img: 'https://images.youracclaim.com/images/bc08972c-3c7d-4b99-82a0-c94bcca36674/Badges_v8-07%2BPractitioner.png',
              abstract: 'The earner has acquired knowledge of applying Enterprise Design Thinking and its value. As a Practitioner, the badge earner finds opportunities to try it out in their every day work.'
            }
          ]
        },
        { label: 'Others',
          content: [
            { label: 'Micro-server, ' },
            { label: 'Embedded programming, ' },
            { label: 'Photoshop, ' },
            { label: 'Premiere, ' },
            { label: '‘Agile@IBM’ Training.' }
          ]
        }
      ]
    }
  },
  methods: {
    jumpToPage (val) {
      window.open(val)
    }
  }
}
</script>
<style scoped>
.labelStyle {
  font-size: 16px;
}
.buttonStyle {
  width: 100%;
  background-color: #1f1f1f;
  border: 0px solid #DCDFE6;
  color: #888;
  text-align: left;
}
.buttonStyle :hover {
  color: #fff;
}
.buttonStyle :active {
  color: #fff
}
.buttonStyle :focus {
  color: #fff
}
</style>
