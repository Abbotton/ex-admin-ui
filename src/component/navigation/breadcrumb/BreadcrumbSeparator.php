<?php

namespace component\navigation\breadcrumb;

/**
 * 面包屑
 * Class BreadcrumbSeparator
 * @link   https://next.antdv.com/components/breadcrumb-cn 面包屑组件
 * @package component\form\field
 */
class BreadcrumbSeparator
{
	/**
	 * 组件名称
	 * @var string
	 */
	protected $name = 'ABreadcrumbSeparator';

	public static function create()
	{
		return new self();
	}
}