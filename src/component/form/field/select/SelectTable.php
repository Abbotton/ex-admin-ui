<?php

namespace ExAdmin\ui\component\form\field\select;

use ExAdmin\ui\component\form\Field;
use ExAdmin\ui\component\form\FormItem;
use ExAdmin\ui\component\grid\grid\Grid;
use ExAdmin\ui\support\Request;

class SelectTable extends Field
{
    protected $name = 'ExSelectTable';

    public $selectField;

    protected $closure;

    protected $custom;
    /**
     * 渲染实例
     * @param Grid|string $grid
     * @return $this
     */
    public function grid($grid){
        list($url, $params) = $this->parseComponentCall($grid);
        $this->attr('gridUrl',$url);
        $this->attr('params',$params);
        return $this;
    }

    /**
     * 多选
     * @return $this
     */
    public function multiple()
    {
        $this->attr('multiple',true);
        $this->attr('mode','multiple');
        $this->modelValueArray();
        return $this;
    }
    public function display(\Closure $closure){
        $this->attr('custom',true);
        return $this->selectRequest($closure,function ($data){
            return $data;
        });
    }
    public function options(\Closure $closure)
    {
        return $this->selectRequest($closure,function ($data){
            $options = [];
            foreach ($data as $key => $value) {
                $options[] = [
                    'value' => $key,
                    'label' => $value
                ];
            }
            return $options;
        });
    }
    protected function selectRequest(\Closure $closure,\Closure $custom){
        $this->closure  = $closure;
        $this->custom  = $custom;
        $this->attr('submitUrl',$this->formItem->form()->attr('url'));
        $this->attr('submitParams',$this->formItem->form()->call['params']+['ex_admin_action'=>'selectTable','ex_admin_select_field'=>$this->selectField]);
        return $this;
    }
    public function setFormItem(FormItem $formItem)
    {
        parent::setFormItem($formItem); // TODO: Change the autogenerated stub
        $this->selectField = $this->getValidateField();
    }

    public function handle(){
        $data = call_user_func($this->closure,Request::input('ex_eadmin_select_id',[]));
        return call_user_func($this->custom,$data);
    }

}
