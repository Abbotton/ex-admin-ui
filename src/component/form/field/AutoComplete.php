<?php

namespace ExAdmin\ui\component\form\field;

use ExAdmin\ui\component\Component;
use ExAdmin\ui\component\form\Field;
use ExAdmin\ui\component\form\FormItem;

/**
 * 自动完成
 * Class AutoComplete
 * @link   https://next.antdv.com/components/auto-complete-cn 自动完成组件
 * @method $this allowClear(bool $focus = false) 支持清除, 单选模式有效                                                    boolean
 * @method $this autofocus(bool $focus = false) 自动获取焦点                                                                boolean
 * @method $this backfill(bool $fill = false) 使用键盘选择选项的时候把选中项回填到输入框中                                    boolean
 * @method $this defaultActiveFirstOption(bool $active = true) 是否默认高亮第一个选项。                                    boolean
 * @method $this disabled(bool $loading = false) 是否禁用                                                                boolean
 * @method $this dropdownMatchSelectWidth(mixed $match = true) 下拉菜单和选择器同宽。默认将设置 min-width，当值小于选
 *                                                                    择框宽度时会被忽略。false 时会关闭虚拟滚动              boolean | number
 * @method $this filterOption(mixed $filter = true) 是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option
 *                                                    两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。       boolean or function(inputValue, option)
 * @method $this placeholder(string $placeholder) 输入框提示                                                                string | slot
 * @method $this value(mixed $value) 指定当前选中的条目                                                                    string|string[]|{
 * key: string, label: string|vNodes
 * }|Array<{
 * key: string, label: string|vNodes
 * }>
 * @method $this defaultOpen(bool $open) 是否默认展开下拉菜单                                                                boolean
 * @method $this open(bool $open) 是否展开下拉菜单                                                                        boolean
 * @package ExAdmin\ui\component\form\field
 */
class AutoComplete extends Field
{
    use OptionsClosure,CallbackDefinition;
    /**
     * 插槽
     * @var string[]
     */
    protected $slot = [
        'placeholder',
    ];

    /**
     * 组件名称
     * @var string
     */
    protected $name = 'ExAutoComplete';





    public function __construct($field = null, $value = '')
    {
        parent::__construct($field, $value);
        $this->allowClear();
    }



    /**
     * 选项
     * @param array $data 数据
     * @return $this
     */
    public function options(array $data)
    {
        $this->optionsClosure = function () use ($data) {
            $options = [];
            foreach ($data as $key => $value) {
                $options[] = [
                    'value' => $key,
                    'label' => $value,
                ];
            }
            $this->vModel('options',null,$options,true);
        };
        return $this;
    }
    /**
     * 远程加载options
     * @param string|\Closure $callback 闭包回调或者url
     */
    public function remoteOptions($callback){
        $callbackField = '';
        $url = $this->formItem->form()->attr('url');
        if($callback instanceof \Closure){
            $callbackField = $this->setCallback($callback,function ($data){
                $options = [];
                foreach ($data as $key => $value) {
                    $options[] = [
                        'value' => $key,
                        'label' => $value
                    ];
                }
                return $options;
            });
        }else{
            $url = $callback;
        }
        $field = $this->vModel('options',null,[],true);
        $this->form->except($field);
        $params  = [
            'url' => $url,
            'data' => [
                'ex_admin_form_action'=>'remoteOptions',
                'ex_admin_callback_field'=> $callbackField,
                'optionsField'=> $field,
            ],
            'method' => 'POST',
        ];

        $this->attr('remote',$params);
        $this->filterOption(false);
        return $this;
    }
    public function setFormItem(FormItem $formItem)
    {
        parent::setFormItem($formItem); // TODO: Change the autogenerated stub
        if($this->form->attr('layout') == 'inline'){
            $this->style(['minWidth'=>'200px']);
        }
    }
}
