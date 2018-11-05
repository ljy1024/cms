<template>
  <div class="category">
      <!--按钮去  -->
      <div class="btns">
        <el-button size="mini">新增</el-button>
        <el-button size="mini">批量删除</el-button>
      </div>
      <!--按钮去结束  -->
      <!--栏目管理表格  -->
      <div class="category_tbl">
            <el-table :data="categoies" style="width: 100%" size='mini' :border='true'>
            <el-table-column
                prop="date"
                label="栏目名称"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="父栏目"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="描述">
             <el-table-column
                prop="name"
                label="操作">   
            </el-table-column>
            </el-table>
      </div>
      <!--栏目管理结束  -->
  </div>
</template>
<script>
export default {
  data(){
      return{
          
      }
  }
}
</script>

