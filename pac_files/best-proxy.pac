function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.123.101.174:3128",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 36.255.98.150:9002",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 37.120.162.180:10017",
        "SOCKS 122.54.147.110:8082",
        "SOCKS 119.81.189.194:8123",
        "SOCKS 213.250.198.146:7777",
        "SOCKS 125.87.82.86:3256",
        "SOCKS 185.38.111.1:8080",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 18.141.177.23:80",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 184.185.2.45:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}