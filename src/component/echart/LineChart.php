<?php
/**
 * Created by PhpStorm.
 * User: rocky
 * Date: 2022-05-23
 * Time: 22:43
 */

namespace ExAdmin\ui\component\echart;

use Carbon\Carbon;

/**
 * 折线图
 * Class LineChart
 * @package ExAdmin\ui\component\echart
 */
class LineChart extends Echart
{
    public $xAxisData = [];
    public function __construct()
    {
        parent::__construct();
        $this->echart->tooltip->trigger = 'axis';
        $this->echart->grid = [
            'left' => '3%',
            'right' => '4%',
            'bottom' => '3%',
            'containLabel' => true
        ];
        $this->echart->yAxis[] = array(
            'type' => 'value'
        );
        $this->xAxis($this->dateFilterValue);
    }

    /**
     * 设置x轴数据
     * @param string|array $xAxis
     * @return $this
     */
    public function xAxis($xAxis = 'today'){
        $this->xAxisData = $xAxis;
        if(is_string($xAxis)){
            $this->xAxisData = [];
            switch ($xAxis) {
                case 'yesterday':
                case 'today':
                    if ($xAxis == 'yesterday') {
                        $date = date('Y-m-d 00:00', strtotime(' -1 day'));
                    } else {
                        $date = date('Y-m-d 00:00');
                    }
                    for ($i = 0; $i < 24; $i++) {
                        $hour = $i < 10 ? '0' . $i : $i;
                        $this->xAxisData[] = [
                          'value'=>[
                              Carbon::parse($date)->addHours($i)->format("Y-m-d $hour:00:00"),
                              Carbon::parse($date)->addHours($i)->format("Y-m-d $hour:59:59"),
                          ],
                          'label'=>"{$i}".admin_trans('echart.dian').admin_trans('echart.to').($i+1).admin_trans('echart.dian')
                        ];
                    }
                    break;
                case 'week':
                    $start_week = Carbon::now()->startOfWeek()->addDays(-1)->toDateString();
                    for ($i = 0; $i <= 6; $i++) {
                        $day = Carbon::make($start_week)->addDays($i)->toDateString();
                        $this->xAxisData[] = [
                            'value'=>[
                                Carbon::parse($day)->format("Y-m-d 00:00:00"),
                                Carbon::parse($day)->format("Y-m-d 23:59:59"),
                            ],
                            'label'=>$day,
                        ];
                    }
                    break;
                case 'month':
                    $now = Carbon::today();
                    $months = Carbon::parse($now->firstOfMonth()->toDateString())->daysUntil($now->endOfMonth()->toDateString())->toArray();
                    foreach ($months as $month) {
                        $day = $month->toDateString();
                        $this->xAxisData[] = [
                            'value'=>[
                                Carbon::parse($day)->format("Y-m-d 00:00:00"),
                                Carbon::parse($day)->format("Y-m-d 23:59:59"),
                            ],
                            'label'=>$day,
                        ];
                    }
                    break;
                case 'year':
                    $now = Carbon::today();
                    for ($i = 1; $i <= 12; $i++) {
                        $day = Carbon::parse($now)->firstOfYear()->addMonths($i-1)->format('Y-m');
                        $this->xAxisData[] = [
                            'value'=>[
                                Carbon::parse($day)->format("Y-m-d 00:00:00"),
                                Carbon::parse($day)->endOfMonth()->format("Y-m-d 23:59:59"),
                            ],
                            'label'=> $i . admin_trans('echart.month')
                        ];
                    }
                    break;
            }
        }
        $this->echart->xAxis = [
            'type' => 'category',
            'boundaryGap' => false,
            'data' => array_column($this->xAxisData,'label')
        ];
    }

    /**
     * 添加数据
     * @param $name
     * @param array $data
     * @return $this
     */
    public function data($name, $data)
    {
        $this->data[$name] = $data;
        $this->echart->series[] = array(
            'name' => $name,
            'type' => 'line',
            'symbolSize' => 6,
            'data' => $data
        );
        return $this;
    }
}