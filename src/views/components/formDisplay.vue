<template>
    <div class="form-display">
        <div class="table-ly">
            <div class="item-cell text-right label-title" :style="{width: labelWidth + 'px'}">
                <div class="label-content">
                    <span :class="{labelColor: isColon}"><span class="c-red" v-if="isRequired">*</span>{{label}}</span><span style="padding-left:3px" :class="{labelColor: isColon}" v-if="isColon">:</span>
                </div>
            </div>
            <div class="item-cell value-wrap">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    isRequired: {
      type: Boolean,
      default: false
    },
    isColon: {
      type: Boolean,
      default: false
    },
    labelWidth: {
      type: [Number, String],
      default: 150
    }
  }
}
</script>

<style lang="less" scoped>
.flex {
    display: flex;
}
.flex-col-c {
    align-items: center;
}
.value-wrap {
    vertical-align: middle;
    line-height: 18px;
}
.form-display {
    width: 100%;
    margin-bottom: 12px;
    .label-title {
        vertical-align: top;
        color: #333;
        padding: 0 8px 0 0;
        word-break: break-word;
        line-height: 12px;
        height: 20px;
        .labelColor {
            color: #909399;
        }
    }
    .content {
        min-height: 16px;
    }
    .label-content {
        display: flex;
        height: 100%;
        max-height: 28px;
        width: 100%;
        align-items: center;
        justify-content: flex-end;
    }
    .table-ly {
        display: table;
        table-layout: fixed;
        width: 100%;
    }
    .item-cell {
        display: table-cell;
    }
    .text-right {
        text-align: right;
    }
    .c-red {
        color: #EE2200;
    }
}
</style>
