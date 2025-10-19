function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.93.89.165:4029",
        "SOCKS 15.160.181.77:8331",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 185.93.89.147:5476",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 185.93.89.144:4224",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 67.43.236.19:25371",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 185.93.89.163:4340",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 24.106.221.230:53281",
        "SOCKS 185.93.89.181:4039",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 174.138.62.182:43715",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}