/**
 * Created by JingHongGang on 2022/12/22.
 */
// import CommentList from '../comments/CommentList'
import plugins from 'js-plugin'

export default function blogDetail() {
  return (
    <div>
      Blog Detail
      {/*<CommentList/>*/}
      {plugins.invoke("blog.footer")}
    </div>
  )
}