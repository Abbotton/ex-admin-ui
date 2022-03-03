<?php

namespace ExAdmin\ui\contract;

use ExAdmin\ui\response\Message;
use Illuminate\Http\Request;

interface GridInterface
{
    public function __construct($data);

    /**
     * 删除选中
     * @param array $ids 删除选中id
     * @return mixed
     */
    public function deleteSelect(array $ids): Message;

    /**
     * 删除全部
     * @return Message
     */
    public function deleteAll(): Message;

    /**
     * 拖拽排序
     * @param int $id 排序id
     * @param int $sort 排序位置
     * @return Message
     */
    public function dragSort(int $id, int $sort): Message;

    /**
     * 输入框排序
     * @param int $id 排序id
     * @param int $sort 排序位置
     * @return Message
     */
    public function inputSort(int $id, int $sort): Message;

    /**
     * 快捷搜索
     * @param string $keyword 关键词
     * @return mixed
     */
    public function quickSearch(string $keyword);
    /**
     * 数据源
     * @param int $page 第几页
     * @param int $size 分页大小
     * @return array
     */
    public function data(int $page, int $size): array;

    /**
     * 返回总条数
     * @return int
     */
    public function total(): int;
}