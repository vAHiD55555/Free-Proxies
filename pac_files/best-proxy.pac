function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.37.77:57114",
        "SOCKS 128.140.113.110:3128",
        "SOCKS 123.253.108.40:8999",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 89.58.45.94:10038",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 157.180.121.252:32831",
        "SOCKS 103.187.226.52:8082",
        "SOCKS 89.58.45.94:20952",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 51.195.139.95:44648",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}