<template>
  <div class="article">
      <!--按钮区  -->
      <div class="btns">
            <el-select size='mini' v-model="categoryId" clearable placeholder="所有栏目">
                <el-option v-for='c in categories' :key='c.id'>
 
                </el-option>
            </el-select>
      </div>
      <!--按钮区结束  -->
      <!--列表去  -->
      <div class="article_tbl" v-loading='loading'>
            <el-table :data="categoies" style="width: 100%" size='mini' :border='true'>
                <el-table-column
                prop="date"
                label="编号"
                width="180">
            </el-table-column>
            <el-table-column
                prop="date"
                label="文章标题"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="所属栏目"
                width="180">
            </el-table-column>
             <el-table-column
                prop="name"
                label="作者"
                width="180">
            </el-table-column>
             <el-table-column
                prop="name"
                label="发布时间"
                width="180">
            </el-table-column>
             <el-table-column
                prop="name"
                label="阅读次数"
                width="180">
            </el-table-column>
             <el-table-column
                prop="name"
                label="操作">   
            </el-table-column>
            </el-table>
      </div>
      <!--列表去结束  -->
      <!--分页  -->
      <div class="page">
          <el-pagination layout="prev,pager,next" :page-size='params.pageSize' @current-change='handleCurrentChange'>

          </el-pagination>
      </div>
      <!--分页结束  -->
      <!--模态框  -->
      
  </div>

</template>
<script>
export default {
  data(){
      return{
          articles:[],
          loading:false,
          total:10,
          multipleSelection:[],
          categories:[],
          params:{
            page:0,
            pageSize:10,
            categoryId:null,
            keywords:null
          }
      }
  },
  watch:{
    params:{
        handler:function(){
            this.findAllArticles
        }
    }
  },
  methods:{
      findAllArticles(){
          this.loading=true;
          axios.get('/manager/article/findArticle',{
                params:{
                  page:this.page,
                  pageSize:this.pageSize
              }
          })
          .then(({data:result})=>{
                this.aiticles=result.data;
          })
          .catch(()=>{
              this.$notify.error({
                  title:'错误',
                  message:'网络异常',
              });
          })
          .finally(()=>{
              this.loading=false;
          })
      },
      handleCurrentChange(page){
        this.params.page=page-1;
      },
      handleSelectionChange(val){
          this.multipleSelect
      },
  }
}
</script>

