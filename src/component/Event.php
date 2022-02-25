<?php

namespace ExAdmin\ui\component;

trait Event
{
    //事件
    protected $event = [];
    /**
     * 移除事件
     * @param $name
     */
    public function removeEvent($name)
    {
        $name = ucfirst($name);
        unset($this->event[$name]);
        return $this;
    }

    /**
     * 触发组件函数
     * @param string $name 事件名称 例如点击直接click
     * @param string $function 函数称
     * @param array $params 函数传参
     * @param Component $component 要执行函数的组件，默认当前组件
     * @return $this
     */
    public function eventFunction(string $name,string $function,array $params = [],Component $component=null)
    {
        $field = $this->random();
        if(is_null($component)){
            $component = $this;
        }
        $component->vModel('ref',$field,'',false);
        return $this->event($name, ['function' => $function, 'params' => $params,'ref'=>$field,'name'=>$component->getName()], 'function');
    }

    /**
     * 触发事件
     * @param string $name 事件名称 例如点击直接click
     * @param array $value
     * @param string $type variable-设置bind变量 , function-执行组件函数
     * @return $this
     */
    public function event(string $name, array $value = [],string $type = 'variable')
    {
        $name = ucfirst($name);
        $this->event[$name][$type][] = $value;
        return $this;
    }
}