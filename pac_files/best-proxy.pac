function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 205.185.114.78:5556",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 135.181.203.208:80",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 91.184.253.97:8888",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 185.244.77.62:1080",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 101.255.122.82:8090",
        "SOCKS 89.108.83.137:1080",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 128.140.76.145:28511",
        "SOCKS 8.222.234.245:1145",
        "SOCKS 104.248.158.27:25100",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}