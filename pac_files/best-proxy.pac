function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.210.4.18:7779",
        "SOCKS 36.255.98.176:4778",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 62.60.131.253:9101",
        "SOCKS 62.60.131.205:4091",
        "SOCKS 36.255.98.181:4798",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 210.75.240.178:4781",
        "SOCKS 37.120.133.137:3128",
        "SOCKS 36.255.98.165:4925",
        "SOCKS 36.255.98.180:4008",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 194.163.167.32:1080",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 79.110.52.252:3128",
        "SOCKS 159.195.84.83:443",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 62.60.131.204:6040",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}