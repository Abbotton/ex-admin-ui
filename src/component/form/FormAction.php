<?php

namespace ExAdmin\ui\component\form;

use ExAdmin\ui\component\common\Button;
use ExAdmin\ui\component\Component;


/**
 * Class FormAction
 * @property Form $form
 */
class FormAction extends FormItem
{
    protected $form;
    //提交按钮
    protected $submitButton;
    //重置按钮
    protected $resetButton;
    //隐藏重置按钮
    protected $hideResetButton = false;
    //隐藏提交按钮
    protected $hideSubmitButton = false;
    //隐藏操作
    protected $hideAction = false;
    //左边自定义内容
    protected $leftAction = [];
    //右边自定义内容
    protected $rightAction = [];

    public function __construct(Form $form)
    {
        $this->form = $form;
        $this->attr('class','footer');
        $this->submitButton = Button::create(admin_trans('form.submit'))
            ->eventFunction('click', 'submit', [], $this->form)
            ->bindExpose('loading','loading',$form)
            ->type('primary');
        $this->resetButton = Button::create(admin_trans('form.reset'))
            ->eventFunction('click', 'form.resetFields', [], $this->form);
        $this->a =$form;
        $this->colon(false);
        parent::__construct($form);
    }

    /**
     * 提交按钮
     * @return Button
     */
    public function submitButton()
    {
        return $this->submitButton;
    }

    /**
     * 重置按钮
     * @return Button
     */
    public function resetButton()
    {
        return $this->resetButton;
    }

    /**
     * 隐藏操作
     * @param bool $bool
     */
    public function hide($bool = true)
    {
        $this->componentVisible = !$bool;
    }
    
    /**
     * 隐藏提交按钮
     */
    public function hideSubmitButton($bool = true)
    {
        $this->hideSubmitButton = $bool;
    }

    /**
     * 隐藏重置按钮
     */
    public function hideResetButton($bool = true)
    {
        $this->hideResetButton = $bool;
    }

    /**
     * 添加左边自定义内容
     * @param mixed $content
     */
    public function addLeftAction($content)
    {
        $this->leftAction[] = $content;
    }

    /**
     * 添加右边自定义内容
     * @param mixed $content
     */
    public function addRightAction($content)
    {
        $this->rightAction[] = $content;
    }
    public function jsonSerialize()
    {
        if ($this->hideResetButton) {
            $this->resetButton = null;
        }

        if ($this->hideSubmitButton) {
            $this->submitButton = null;
        }
        $this->content([
            $this->leftAction,
            $this->submitButton,
            $this->resetButton,
            $this->rightAction
        ]);

        if($this->form->attr('layout') != 'vertical'){
            $this->label(' ');
        }
        return parent::jsonSerialize(); // TODO: Change the autogenerated stub
    }
}
