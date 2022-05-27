<?php
/**
 * Created by PhpStorm.
 * User: rocky
 * Date: 2022-05-24
 * Time: 21:52
 */

namespace ExAdmin\ui\component\echart;

/**
 * 地图
 * Class MapChart
 * @package ExAdmin\ui\component\echart
 * @method static $this create(string $name) 创建
 */
class MapChart extends Echart
{
    protected $seriesName;

    protected $data = [];

    public function __construct($name)
    {
        parent::__construct();
        $this->seriesName = $name;
        $this->options([
            'tooltip' => [
                'trigger' => 'item',
                'formatter' => '{b}: {c}',
            ],
            'legend' => [],
            'visualMap' => [
                'min' => 0,
                'max' => 10,
                'text' => ['高', '低'],
                'realtime' => true,
                'calculable' => true,
                'show' => true,
                'inRange' => [
                    'color' => ['#f1f1f1', '#25aed4']
                ],
                'orient' => 'horizontal',
                'bottom' => '1%',
                'left' => '0',
                'itemWidth' => '12px',
                'itemHeight' => '200px'
            ],
        ]);
    }

    /**
     * 添加数据
     * @param $name
     * @param int|\Closure $value
     * @return $this
     */
    public function data($name, $value)
    {
        if ($value instanceof \Closure) {
            $value = call_user_func($value);
        }
        $this->data[] = ['value' => $value, 'name' => $name];
        return $this;
    }

    public function jsonSerialize()
    {

        $this->echart->series[] = [
            'name' => $this->seriesName,
            'type' => 'map',
            'map' => 'china',
            'zoom' => 1.1,
            'showLegendSymbol' => false,
            'selectedMode' => 'single',
            'itemStyle' => [
                'normal' => [
                    'areaColor' => '#f1f1f1',
                    'borderColor' => '#fff',
                ],
                'emphasis' => [
                    'areaColor' => '#5CD2B7'
                ]
            ],
            'label' => [
                'show' => true
            ],
            'data' => $this->data,
        ];
       
        return parent::jsonSerialize(); // TODO: Change the autogenerated stub
    }
}