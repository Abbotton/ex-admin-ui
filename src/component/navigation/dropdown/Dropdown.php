<?php

namespace ExAdmin\ui\component\navigation\dropdown;

use ExAdmin\ui\component\common\Html;
use ExAdmin\ui\component\common\Icon;
use ExAdmin\ui\component\Component;
use ExAdmin\ui\component\feedback\Drawer;
use ExAdmin\ui\component\feedback\Modal;
use ExAdmin\ui\component\navigation\menu\Menu;
use ExAdmin\ui\component\navigation\menu\MenuItem;

/**
 * 下拉菜单
 * Class Dropdown
 * @link   https://next.antdv.com/components/dropdown-cn 下拉菜单组件
 * @method $this destroyPopupOnHide(bool $value=true) 	关闭后是否销毁 Dropdown                                                               boolean
 * @method $this disabled(bool $value=true) 菜单是否禁用                                                                    boolean
 * @method $this overlayClassName(string $overlayClassName) 下拉根元素的类名称                                                string
 * @method $this overlayStyle(mixed $overlayStyle) 下拉根元素的样式                                                        object
 * @method $this placement(string $placement = 'bottomLeft') 菜单弹出位置：bottomLeft bottomCenter bottomRight topLeft topCenter topRight          string
 * @method $this trigger(mixed $trigger = ['hover']) 触发下拉的行为, 移动端不支持 hover                                       [click|hover|contextmenu]
 * @method $this visible(bool $visible=true) 菜单是否显示                                                                        boolean
 * @method static $this create($content) 创建
 * @package ExAdmin\ui\component\form\field
 */
class Dropdown extends Component
{
    /**
     * 组件名称
     * @var string
     */
    protected $name = 'ExDropdown';

    protected $slot = ['overlay'];
    /**
     * @var Menu
     */
    public $menu;


    public function __construct($content)
    {
        $this->menu = Menu::create();
        if(is_string($content)){
            $content = Html::create($content);
        }
        $this->content($content);
    }

    /**
     * 下拉菜单选项
     * @param mixed $content
     * @param string $icon
     * @return MenuItem
     */
    public function item($content, $icon = null)
    {
        return $this->menu->item($content, $icon);
    }

    /**
     * @return Menu
     */
    public function getMenu(){
        return $this->menu;
    }
    /**
     * 下划线
     * @return $this
     */
    public function divider(){
        $this->menu->content(Html::raw('<a-menu-divider />'));
        return $this;
    }
    /**
     * 追加前面
     * @param mixed $content
     * @param string $icon 图标
     * @return MenuItem
     */
    public function prepend($content, $icon = null)
    {
        return $this->menu->item($content, $icon,2);
    }
    /**
     * 追加尾部
     * @param mixed $content
     * @param string $icon 图标
     * @return MenuItem
     */
    public function append($content, $icon = null)
    {
        return $this->menu->item($content, $icon);
    }
    public function jsonSerialize()
    {
        $default = $this->menu->getContent('default');
        foreach ($default as $index => $item) {
            if ($item instanceof Modal || $item instanceof Drawer) {
                $default[$index] = $item->attr('reference');
                $item->removeAttr('reference');
                $item->attr('field',$item->getModel());
                $this->content($item,'reference');
            }
        }
        $this->menu->setContent(['default' => $default]);
        $default = $this->getContent('default');
        if (count($default) > 1) {
            $this->setContent(['default' => $default]);
        }
        $this->overlay($this->menu);
        return parent::jsonSerialize(); // TODO: Change the autogenerated stub
    }
}
