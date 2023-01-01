<?php
/**
 * Created by PhpStorm.
 * User: rocky
 * Date: 2022-02-22
 * Time: 21:00
 */

namespace ExAdmin\ui\component\form;


use ExAdmin\ui\component\Component;
use ExAdmin\ui\component\form\field\CallbackDefinition;

/**
 * Class FormMany
 * @method static $this create($field = null, $value = []) 创建
 * @method $this flex(bool $value = true) flex布局
 * @method $this disabled(bool $disabled = true) 是否禁用状态                                    boolean
 * @method $this hideClear(bool $disabled = true) 隐藏清空                                    boolean
 * @method $this hideAdd(bool $disabled = true) 隐藏添加                                    boolean
 * @method $this limit(int $value) 限制数量
 * @method $this sortField(string $value) 排序字段
 * @method $this defaultRow(int $value) 默认添加几行
 * @method $this enterAdd(bool $enterAdd = true) 回车添加（表格模式有效）
 * @package ExAdmin\ui\component\form
 */
class FormMany extends Field
{
    use CallbackDefinition;

    protected $name = 'ExFormMany';

    protected $vModel = 'value';

    protected $toTable;

    protected $tableCallback = null;

    public function __construct($field = null, $value = [])
    {
        parent::__construct($field, $value);
    }

    /**
     * @param ToTable $object
     */
    public function setToTabe(ToTable $object)
    {
        $this->toTable = $object;
    }
    /**
     * @return ToTable
     */
    public function getToTabe()
    {
        return $this->toTable;
    }

    public function tableCallback(\Closure $closure)
    {
        $this->tableCallback = $closure;
        return $this;
    }

    public function setFormItem(FormItem $formItem)
    {
        parent::setFormItem($formItem); // TODO: Change the autogenerated stub
        if ($this->tableCallback) {
            $callbackField = $this->setCallback($this->tableCallback);
            $this->attr('selectGridAjax', [
                'url' => $this->form->attr('url'),
                'method' => 'POST',
                'data' => $this->form->call['params'] + [
                        'ex_admin_form_action' => 'selectTable',
                        'grid_request_data' => true,
                        'ex_admin_callback_field' => $callbackField
                    ]
            ]);
        }
    }

    /**
     * 表格模式
     * @param bool $value
     * @return $this
     */
    public function table(bool $value = true)
    {
        $this->attr('table', $value);
        $this->attr('grid', $this->toTable->getGrid());
        return $this;
    }

    /**
     * 可拖拽
     * @return $this
     */
    public function drag()
    {
        $this->attr('drag', true);
        $this->toTable->preColumn('ex_sort_drag')
            ->width(30)
            ->align('center')
            ->fixed('left')
            ->attr('type', 'sortManyDrag')
            ->default('');
        return $this;
    }

    public function jsonSerialize()
    {
        if (!$this->attr('disabled') && !$this->attr('action')) {
            $this->attr('action', true);
            $this->toTable->column('ex_action')
                ->width(70)
                ->align('center')
                ->fixed('right')
                ->attr('type', 'action');
        }
        return parent::jsonSerialize(); // TODO: Change the autogenerated stub
    }
}
