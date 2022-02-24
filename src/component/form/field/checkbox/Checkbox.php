<?php

namespace ExAdmin\ui\component\form\field\checkbox;

use ExAdmin\ui\component\Component;
use ExAdmin\ui\component\form\Field;

/**
 * 多选框
 * Class Checkbox
 * @link   https://next.antdv.com/components/checkbox-cn 多选框组件
 * @method $this autofocus(bool $focus = false) 	自动获取焦点															boolean
 * @method $this checked(bool $checked = false) 指定当前是否选中															boolean
 * @method $this disabled(bool $disabled = false) 失效状态																boolean
 * @method $this indeterminate(bool $disabled = false) 设置 indeterminate 状态，只负责样式控制								boolean
 * @package ExAdmin\ui\component\form\field
 */
class Checkbox extends Field
{
    /**
     * 组件名称
     * @var string
     */
	protected $name = 'ACheckbox';

	public function __construct($field = null, $value = [])
    {
        parent::__construct($field, $value);
    }
}
